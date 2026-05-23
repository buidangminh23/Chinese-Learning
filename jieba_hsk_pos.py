import re
import jieba.posseg as pseg
import os

FILES = [
    "words_hsk4.js",
    "words_hsk5a.js",
    "words_hsk5b.js",
    "words_hsk6a.js",
    "words_hsk6b.js"
]

JIEBA_POS_MAP = {
    'n': 'Danh từ',
    'nr': 'Danh từ riêng',
    'ns': 'Danh từ (Địa danh)',
    'nt': 'Danh từ (Tổ chức)',
    'nz': 'Danh từ (Khác)',
    'nl': 'Danh từ (Vị trí)',
    'ng': 'Danh từ',
    'v': 'Động từ',
    'vd': 'Động từ / Phó từ',
    'vn': 'Động từ / Danh từ',
    'vg': 'Động từ',
    'a': 'Tính từ',
    'ad': 'Tính từ / Phó từ',
    'an': 'Tính từ / Danh từ',
    'ag': 'Tính từ',
    'd': 'Phó từ',
    'dg': 'Phó từ',
    'm': 'Số từ',
    'mg': 'Số từ',
    'q': 'Lượng từ',
    'mq': 'Số - Lượng từ',
    'qg': 'Lượng từ',
    'p': 'Giới từ',
    'c': 'Liên từ',
    'u': 'Trợ từ',
    'uz': 'Trợ từ',
    'uv': 'Trợ từ',
    'ul': 'Trợ từ',
    'uj': 'Trợ từ',
    'ud': 'Trợ từ',
    'ug': 'Trợ từ',
    'xc': 'Trợ từ',
    'r': 'Đại từ',
    'rg': 'Đại từ',
    'rr': 'Đại từ',
    'rz': 'Đại từ',
    't': 'Danh từ chỉ thời gian',
    'tg': 'Danh từ chỉ thời gian',
    'f': 'Danh từ phương hướng',
    's': 'Danh từ nơi chốn',
    'b': 'Tính từ', # Quoting
    'z': 'Hình dung từ',
    'e': 'Thán từ',
    'y': 'Trợ từ ngữ khí',
    'o': 'Từ tượng thanh',
    'i': 'Thành ngữ',
    'l': 'Từ láy / Quán dụng ngữ',
    'j': 'Tên gọi tắt',
    'x': 'Khác'
}

def get_vietnamese_pos(hz, vn_meaning):
    words = list(pseg.cut(hz))
    if not words:
        return ""
    
    # Check if the word is treated as one token or multiple
    if len(words) == 1:
        flag = words[0].flag
        return JIEBA_POS_MAP.get(flag, "")
    else:
        # If it's cut into multiple, try to find the dominant POS
        # e.g., if it ends with a noun, it's often a noun.
        # But commonly, for HSK compound words, we can just take the last token or combining them.
        last_flag = words[-1].flag
        first_flag = words[0].flag
        
        flag = last_flag
        # simple heuristic
        if last_flag.startswith('n'): flag = 'n'
        elif last_flag.startswith('v'): flag = 'v'
        elif last_flag.startswith('a'): flag = 'a'
        
        return JIEBA_POS_MAP.get(flag, "")

def process_file(filename):
    print(f"\n--- Xử lý file {filename} ---")
    if not os.path.exists(filename):
        print(f"Không tìm thấy {filename}")
        return
        
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = r'\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"\s*(,[^\]]*)?\]'
    matches = list(re.finditer(pattern, content))
    
    print(f"Đã tìm thấy {len(matches)} từ.")
    
    new_content = content
    for i in range(len(matches) - 1, -1, -1):
        m = matches[i]
        hz, py, vn, extras = m.group(1), m.group(2), m.group(3), m.group(4)
        full_match = m.group(0)
        m_start = m.start()
        
        pos = get_vietnamese_pos(hz, vn)
        
        if extras:
            # Maybe it already has 4 items like `,""` from failed execution
            parts = extras.strip(',').split(',')
            rest = ",".join(parts[1:]).strip()
            # rewrite
            if rest:
                new_str = f'["{hz}","{py}","{vn}","{pos}",{rest}]'
            else:
                new_str = f'["{hz}","{py}","{vn}","{pos}"]'
        else:
            new_str = f'["{hz}","{py}","{vn}","{pos}"]'
            
        new_content = new_content[:m_start] + new_content[m_start:].replace(full_match, new_str, 1)

    with open(filename, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Đã lưu thành công {filename}")

if __name__ == "__main__":
    import jieba
    jieba.initialize()
    for f in FILES:
        process_file(f)
