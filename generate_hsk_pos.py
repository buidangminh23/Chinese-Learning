import re
import math
import os
import time
from google import genai
import json

def load_local_env(path=".env"):
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as file:
        for raw_line in file:
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key and key not in os.environ:
                os.environ[key] = value

load_local_env()

GEMINI_API_KEY = os.environ.get("GOOGLE_API_KEY")
if not GEMINI_API_KEY:
    raise RuntimeError("GOOGLE_API_KEY environment variable is required")
client = genai.Client(api_key=GEMINI_API_KEY)

FILES = [
    "words_hsk3.js",
    "words_hsk4.js",
    "words_hsk5a.js",
    "words_hsk5b.js",
    "words_hsk6a.js",
    "words_hsk6b.js"
]

def chunk_list(lst, n):
    for i in range(0, len(lst), n):
        yield lst[i:i + n]

def get_pos_batch(words):
    # words is a list of tuples: (hz, py, vn)
    word_lines = "\n".join([f"{i+1}. {w[0]} ({w[1]}) - {w[2]}" for i, w in enumerate(words)])
    prompt = f"""
Bạn là chuyên gia ngôn ngữ tiếng Trung. Tôi sẽ cung cấp cho bạn một danh sách các từ vựng tiếng Trung, bao gồm chữ Hán, pinyin và nghĩa.
Nhiệm vụ của bạn là xác định "Từ loại" (Part of Speech) trong tiếng Việt phù hợp nhất cho mỗi từ trong ngữ cảnh thường dùng của từ đó.
(Ví dụ: Danh từ, Động từ, Tính từ, Đại từ, Phó từ, Lượng từ, Giới từ, Liên từ, Trợ từ, Số từ, Thán từ, Hình dung từ...)

TRẢ VỀ ĐỊNH DẠNG SAU:
Trả về duy nhất một mảng JSON các chuỗi (string), mỗi chuỗi là từ loại của từ tương ứng.
Số lượng phần tử trong mảng phải tuyệt đối bằng đúng {len(words)}. Không dùng markdown code block, chỉ in ra JSON array bắt đầu bằng [ và kết thúc bằng ]. Không in thêm bất kỳ văn bản nào khác.

Ví dụ Output:
["Danh từ", "Động từ", "Tính từ", "Phó từ"]

Danh sách từ:
{word_lines}
"""
    try:
        response = client.models.generate_content(
            model='gemini-2.0-flash', 
            contents=prompt
        )
        t = response.text.replace("```json", "").replace("```", "").strip()
        data = json.loads(t)
        if len(data) != len(words):
            print(f"Lỗi độ dài: Cần {len(words)} nhưng nhận được {len(data)}")
            # Thử thêm vào hoặc cắt bớt
            if len(data) > len(words):
                data = data[:len(words)]
            else:
                data.extend([""] * (len(words) - len(data)))
        return data
    except Exception as e:
        print("Error with API call:", e)
        # fallback to empty strings
        return [""] * len(words)

def process_file(filename):
    print(f"\n--- Xử lý file {filename} ---")
    if not os.path.exists(filename):
        print(f"Không tìm thấy {filename}")
        return
        
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    # Match inner array elements like ["阿姨","āyí","cô, dì"]
    # or ["啊","a","à (trợ từ)"]
    # Group 1 = Hz, Group 2 = Py, Group 3 = Vn
    # Also handle if we have a 4th argument.
    
    # regex to find array elements
    # `\["(.*?)","(.*?)","(.*?)"(,[^\]]*)?\]`
    
    pattern = r'\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"\s*(,[^\]]*)?\]'
    matches = list(re.finditer(pattern, content))
    
    print(f"Đã tìm thấy {len(matches)} từ.")
    
    words_data = []
    for m in matches:
        hz, py, vn, extras = m.group(1), m.group(2), m.group(3), m.group(4)
        words_data.append((hz, py, vn, extras, m.group(0), m.start()))
        
    # We will replace string exactly. So we process from end to begin to not mess up offsets.
    
    # Call API in batches of 100
    batch_size = 100
    all_pos = []
    
    for i, batch in enumerate(chunk_list(words_data, batch_size)):
        print(f"  Gọi API lô {i+1}/{(len(words_data)+batch_size-1)//batch_size} ({len(batch)} từ)...")
        pos_list = get_pos_batch(batch)
        all_pos.extend(pos_list)
        time.sleep(2) # rate limit prevention
        
    if len(all_pos) != len(words_data):
        print("Lỗi hệ thống: độ dài all_pos khác words_data")
        return
        
    # Thay thế trên chuỗi
    new_content = content
    # Reverse order replacements
    for i in range(len(words_data) - 1, -1, -1):
        m_start = words_data[i][5]
        hz, py, vn, extras, full_match, _ = words_data[i]
        
        pos = all_pos[i]
        
        # Build new string
        if extras:
            # Maybe it already has 4 items? Let's override the 4th item if it's there
            # but currently they only have 3 items. So extras is probably None or empty.
            if len(extras.split(",")) > 1:
                # has pos
                new_str = f'["{hz}","{py}","{vn}","{pos}"' + ",".join(extras.split(",")[2:]) + "]"
            else:
                new_str = f'["{hz}","{py}","{vn}","{pos}"]'
        else:
            new_str = f'["{hz}","{py}","{vn}","{pos}"]'
            
        new_content = new_content[:m_start] + new_content[m_start:].replace(full_match, new_str, 1)

    with open(filename, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Đã lưu thành công {filename}")

if __name__ == "__main__":
    for f in FILES:
        process_file(f)
