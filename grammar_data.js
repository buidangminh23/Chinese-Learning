// Grammar Data - Ngữ pháp HSK 1-6
const GRAMMAR_DATA = [
 {
  level: 1,
  grammarPoints: [
   {
    title: "是 (shì) - Câu khẳng định \"là\"",
    formula: "Chủ ngữ + 是 + Tân ngữ",
    note: "\"是\" dùng để nối chủ ngữ với danh từ/cụm danh từ. Phủ định: thêm 不 trước 是. VD: 我不是学生。",
    examples: [
     {zh:"我是学生。",py:"Wǒ shì xuéshēng.",vn:"Tôi là học sinh."},
     {zh:"她是老师。",py:"Tā shì lǎoshī.",vn:"Cô ấy là giáo viên."},
     {zh:"这不是我的书。",py:"Zhè bú shì wǒ de shū.",vn:"Đây không phải sách của tôi."}
    ]
   },
   {
    title: "吗 (ma) - Câu hỏi Yes/No",
    formula: "Câu trần thuật + 吗？",
    note: "Chỉ cần thêm 吗 vào cuối câu trần thuật để tạo câu hỏi. Trả lời: lặp lại động từ (có) hoặc 不+động từ (không).",
    examples: [
     {zh:"你是中国人吗？",py:"Nǐ shì Zhōngguó rén ma?",vn:"Bạn là người Trung Quốc à?"},
     {zh:"你喜欢吃米饭吗？",py:"Nǐ xǐhuan chī mǐfàn ma?",vn:"Bạn thích ăn cơm không?"}
    ]
   },
   {
    title: "的 (de) - Sở hữu",
    formula: "Chủ sở hữu + 的 + Danh từ",
    note: "的 biểu thị sở hữu, tương tự 'của' trong tiếng Việt. Với quan hệ thân thiết (gia đình, bạn bè), có thể bỏ 的.",
    examples: [
     {zh:"我的猫很可爱。",py:"Wǒ de māo hěn kě'ài.",vn:"Con mèo của tôi rất dễ thương."},
     {zh:"这是我妈妈。",py:"Zhè shì wǒ māma.",vn:"Đây là mẹ tôi."}
    ]
   },
   {
    title: "不 (bù) / 没 (méi) - Phủ định",
    formula: "不 + Động từ/Tính từ | 没(有) + Động từ",
    note: "不 phủ định thói quen, ý muốn, trạng thái. 没 phủ định hành động đã xảy ra. 没有 = không có. Lưu ý: 不 trước thanh 4 đọc thành thanh 2 (bú).",
    examples: [
     {zh:"我不喝咖啡。",py:"Wǒ bù hē kāfēi.",vn:"Tôi không uống cà phê."},
     {zh:"他没去学校。",py:"Tā méi qù xuéxiào.",vn:"Anh ấy không đi học."},
     {zh:"我没有钱。",py:"Wǒ méiyǒu qián.",vn:"Tôi không có tiền."}
    ]
   },
   {
    title: "在 (zài) - Vị trí & Đang làm",
    formula: "Chủ ngữ + 在 + Nơi chốn | Chủ ngữ + 在 + Động từ",
    note: "在 có 2 nghĩa: (1) ở tại nơi nào; (2) đang làm gì. Vị trí: 在+nơi. Đang: 在+động từ.",
    examples: [
     {zh:"我在北京。",py:"Wǒ zài Běijīng.",vn:"Tôi ở Bắc Kinh."},
     {zh:"他在吃饭。",py:"Tā zài chī fàn.",vn:"Anh ấy đang ăn cơm."}
    ]
   },
   {
    title: "几/多少 - Hỏi số lượng",
    formula: "几 + Lượng từ + Danh từ? | 多少 + (Lượng từ) + Danh từ?",
    note: "几 dùng khi dự đoán số nhỏ (<10), cần lượng từ. 多少 dùng cho số lượng bất kỳ, có thể bỏ lượng từ.",
    examples: [
     {zh:"你有几个孩子？",py:"Nǐ yǒu jǐ ge háizi?",vn:"Bạn có mấy đứa con?"},
     {zh:"这个多少钱？",py:"Zhège duōshao qián?",vn:"Cái này bao nhiêu tiền?"}
    ]
   }
  ],
  sentences: [
   {parts:["我","是","学生","。"],vn:"Tôi là học sinh."},
   {parts:["她","喜欢","吃","苹果","。"],vn:"Cô ấy thích ăn táo."},
   {parts:["今天","天气","很","好","。"],vn:"Hôm nay thời tiết rất tốt."},
   {parts:["你","叫","什么","名字","？"],vn:"Bạn tên là gì?"},
   {parts:["我","想","喝","水","。"],vn:"Tôi muốn uống nước."},
   {parts:["他","在","看","书","。"],vn:"Anh ấy đang đọc sách."},
   {parts:["这","是","我","的","猫","。"],vn:"Đây là con mèo của tôi."},
   {parts:["明天","我","去","学校","。"],vn:"Ngày mai tôi đi học."}
  ]
 },
 {
  level: 2,
  grammarPoints: [
   {
    title: "了 (le) - Hoàn thành / Thay đổi",
    formula: "Động từ + 了 + Tân ngữ | Câu + 了 (thay đổi trạng thái)",
    note: "了 sau động từ = hoàn thành. 了 cuối câu = thay đổi trạng thái. Phủ định dùng 没(有), bỏ 了.",
    examples: [
     {zh:"我吃了三个苹果。",py:"Wǒ chīle sān ge píngguǒ.",vn:"Tôi đã ăn 3 quả táo."},
     {zh:"他来了。",py:"Tā lái le.",vn:"Anh ấy đến rồi."},
     {zh:"下雨了。",py:"Xià yǔ le.",vn:"Trời mưa rồi."}
    ]
   },
   {
    title: "比 (bǐ) - So sánh hơn",
    formula: "A + 比 + B + Tính từ (+ 差异)",
    note: "A比B+adj = A hơn B. Không dùng 很 trước tính từ trong câu so sánh. Có thể thêm mức độ: 多了, 一点, 得多.",
    examples: [
     {zh:"他比我高。",py:"Tā bǐ wǒ gāo.",vn:"Anh ấy cao hơn tôi."},
     {zh:"今天比昨天冷多了。",py:"Jīntiān bǐ zuótiān lěng duō le.",vn:"Hôm nay lạnh hơn hôm qua nhiều."}
    ]
   },
   {
    title: "过 (guò) - Kinh nghiệm",
    formula: "Động từ + 过 + Tân ngữ",
    note: "过 biểu thị đã từng trải qua. Phủ định: 没(有)+动词+过. Hỏi: ...过...吗?",
    examples: [
     {zh:"我去过中国。",py:"Wǒ qùguo Zhōngguó.",vn:"Tôi đã từng đi Trung Quốc."},
     {zh:"你吃过北京烤鸭吗？",py:"Nǐ chīguo Běijīng kǎoyā ma?",vn:"Bạn đã ăn vịt quay Bắc Kinh chưa?"}
    ]
   },
   {
    title: "正在 (zhèngzài) - Đang",
    formula: "Chủ ngữ + 正在 + Động từ + (呢)",
    note: "正在 nhấn mạnh hành động đang diễn ra ngay lúc này. Có thể dùng 在, 正 hoặc 正在, thêm 呢 cuối câu để nhấn mạnh.",
    examples: [
     {zh:"我正在学习呢。",py:"Wǒ zhèngzài xuéxí ne.",vn:"Tôi đang học."},
     {zh:"他们正在开会。",py:"Tāmen zhèngzài kāi huì.",vn:"Họ đang họp."}
    ]
   },
   {
    title: "因为…所以… - Nguyên nhân kết quả",
    formula: "因为 + Nguyên nhân, 所以 + Kết quả",
    note: "Có thể dùng riêng 因为 hoặc 所以, không bắt buộc dùng cả hai.",
    examples: [
     {zh:"因为下雨了，所以我没去。",py:"Yīnwèi xià yǔ le, suǒyǐ wǒ méi qù.",vn:"Vì trời mưa nên tôi không đi."}
    ]
   }
  ],
  sentences: [
   {parts:["我","已经","吃","了","饭","。"],vn:"Tôi đã ăn cơm rồi."},
   {parts:["他","比","我","大","两","岁","。"],vn:"Anh ấy lớn hơn tôi 2 tuổi."},
   {parts:["你","去过","北京","吗","？"],vn:"Bạn đã đến Bắc Kinh chưa?"},
   {parts:["因为","下雨","所以","我","没","去","。"],vn:"Vì trời mưa nên tôi không đi."},
   {parts:["请","你","说","慢","一点","。"],vn:"Xin bạn nói chậm một chút."},
   {parts:["我","正在","看","电视","呢","。"],vn:"Tôi đang xem tivi."}
  ]
 },
 {
  level: 3,
  grammarPoints: [
   {
    title: "把 (bǎ) - Câu chữ 把",
    formula: "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ/结果",
    note: "把 nhấn mạnh tác động lên đối tượng. Tân ngữ phải xác định. Động từ phải có bổ ngữ/kết quả. Không dùng với 知道, 喜欢, 想.",
    examples: [
     {zh:"请把门关上。",py:"Qǐng bǎ mén guānshàng.",vn:"Xin hãy đóng cửa lại."},
     {zh:"我把书放在桌子上了。",py:"Wǒ bǎ shū fàng zài zhuōzi shàng le.",vn:"Tôi đã đặt sách lên bàn."}
    ]
   },
   {
    title: "被 (bèi) - Câu bị động",
    formula: "Chủ ngữ + 被 + (Người thực hiện) + Động từ + Bổ ngữ",
    note: "被 dùng trong câu bị động, thường mang nghĩa tiêu cực. Người thực hiện có thể bỏ.",
    examples: [
     {zh:"我的手机被偷了。",py:"Wǒ de shǒujī bèi tōu le.",vn:"Điện thoại tôi bị trộm."},
     {zh:"蛋糕被他吃了。",py:"Dàngāo bèi tā chī le.",vn:"Bánh kem bị anh ấy ăn mất."}
    ]
   },
   {
    title: "如果…就… - Câu điều kiện",
    formula: "如果 + Điều kiện, 就 + Kết quả",
    note: "如果...就... = nếu...thì... 就 đặt trước động từ của mệnh đề chính.",
    examples: [
     {zh:"如果明天下雨，我就不去了。",py:"Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.",vn:"Nếu mai mưa, tôi sẽ không đi."},
     {zh:"如果你喜欢，就买吧。",py:"Rúguǒ nǐ xǐhuan, jiù mǎi ba.",vn:"Nếu bạn thích thì mua đi."}
    ]
   },
   {
    title: "越来越 - Ngày càng",
    formula: "越来越 + Tính từ/Động từ",
    note: "Biểu thị mức độ tăng dần theo thời gian.",
    examples: [
     {zh:"天气越来越冷了。",py:"Tiānqì yuèláiyuè lěng le.",vn:"Thời tiết ngày càng lạnh."},
     {zh:"他的中文越来越好了。",py:"Tā de Zhōngwén yuèláiyuè hǎo le.",vn:"Tiếng Trung của anh ấy ngày càng tốt."}
    ]
   },
   {
    title: "一边…一边… - Vừa...vừa...",
    formula: "一边 + Động từ 1, 一边 + Động từ 2",
    note: "Hai hành động xảy ra đồng thời. Hai hành động phải cùng chủ ngữ.",
    examples: [
     {zh:"他一边吃饭，一边看电视。",py:"Tā yìbiān chīfàn, yìbiān kàn diànshì.",vn:"Anh ấy vừa ăn cơm vừa xem tivi."}
    ]
   }
  ],
  sentences: [
   {parts:["请","把","窗户","打开","。"],vn:"Xin mở cửa sổ ra."},
   {parts:["他","被","老师","批评","了","。"],vn:"Anh ấy bị thầy giáo phê bình."},
   {parts:["天气","越来越","冷","了","。"],vn:"Thời tiết ngày càng lạnh."},
   {parts:["如果","你","有","时间","就","来","吧","。"],vn:"Nếu bạn có thời gian thì đến nhé."},
   {parts:["虽然","很","累","但是","很","开心","。"],vn:"Mặc dù rất mệt nhưng rất vui."},
   {parts:["她","一边","唱歌","一边","跳舞","。"],vn:"Cô ấy vừa hát vừa nhảy."}
  ]
 },
 {
  level: 4,
  grammarPoints: [
   {
    title: "不但…而且… - Không những...mà còn...",
    formula: "不但 + A, 而且 + B",
    note: "Biểu thị thêm ý, vế sau bổ sung cho vế trước. Nếu cùng chủ ngữ: Chủ ngữ + 不但...而且... Khác chủ ngữ: 不但+CN1+..., 而且+CN2+...",
    examples: [
     {zh:"他不但会说中文，而且说得很好。",py:"Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.",vn:"Anh ấy không chỉ biết nói tiếng Trung, mà còn nói rất giỏi."}
    ]
   },
   {
    title: "无论…都… - Bất kể...đều...",
    formula: "无论 + Câu hỏi/Lựa chọn, 都/也 + ...",
    note: "Biểu thị kết quả không đổi dù điều kiện thay đổi. 无论 có thể thay bằng 不管.",
    examples: [
     {zh:"无论多忙，我都要学中文。",py:"Wúlùn duō máng, wǒ dōu yào xué Zhōngwén.",vn:"Bất kể bận thế nào, tôi đều phải học tiếng Trung."}
    ]
   },
   {
    title: "只要…就… - Chỉ cần...thì...",
    formula: "只要 + Điều kiện, 就 + Kết quả",
    note: "Điều kiện đủ: chỉ cần có điều kiện là có kết quả.",
    examples: [
     {zh:"只要努力，就能成功。",py:"Zhǐyào nǔlì, jiù néng chénggōng.",vn:"Chỉ cần cố gắng thì sẽ thành công."}
    ]
   },
   {
    title: "连…都/也… - Ngay cả...cũng...",
    formula: "连 + Danh từ + 都/也 + Động từ",
    note: "Nhấn mạnh mức độ, thường dùng để nói điều gì đó bất ngờ hoặc cực đoan.",
    examples: [
     {zh:"他连饭都没吃。",py:"Tā lián fàn dōu méi chī.",vn:"Anh ấy ngay cả cơm cũng không ăn."},
     {zh:"这个字连小孩子都会写。",py:"Zhège zì lián xiǎo háizi dōu huì xiě.",vn:"Chữ này ngay cả trẻ con cũng biết viết."}
    ]
   }
  ],
  sentences: [
   {parts:["不但","便宜","而且","质量","很","好","。"],vn:"Không chỉ rẻ mà chất lượng còn rất tốt."},
   {parts:["无论","多","难","我","都","不","放弃","。"],vn:"Bất kể khó thế nào tôi đều không bỏ cuộc."},
   {parts:["只要","你","来","我","就","高兴","。"],vn:"Chỉ cần bạn đến tôi liền vui."},
   {parts:["他","连","自己","的","名字","都","不","会","写","。"],vn:"Anh ấy ngay đến tên mình cũng không biết viết."},
   {parts:["即使","失败","了","也","不要","放弃","。"],vn:"Cho dù thất bại cũng đừng bỏ cuộc."}
  ]
 },
 {
  level: 5,
  grammarPoints: [
   {
    title: "不是…而是… - Không phải...mà là...",
    formula: "不是 + A, 而是 + B",
    note: "Phủ định A, khẳng định B. Dùng để đính chính hoặc nhấn mạnh.",
    examples: [
     {zh:"他不是老师，而是医生。",py:"Tā bú shì lǎoshī, ér shì yīshēng.",vn:"Anh ấy không phải giáo viên, mà là bác sĩ."}
    ]
   },
   {
    title: "与其…不如… - Thà...còn hơn...",
    formula: "与其 + A, 不如 + B",
    note: "So sánh hai lựa chọn, thiên về B hơn A.",
    examples: [
     {zh:"与其等他，不如我们先走。",py:"Yǔqí děng tā, bùrú wǒmen xiān zǒu.",vn:"Thà không đợi anh ấy, mình đi trước còn hơn."}
    ]
   },
   {
    title: "由于 - Do, bởi vì (trang trọng)",
    formula: "由于 + Nguyên nhân, ...",
    note: "Tương tự 因为 nhưng trang trọng hơn, thường dùng trong văn viết. Không dùng 所以 sau 由于.",
    examples: [
     {zh:"由于天气不好，航班取消了。",py:"Yóuyú tiānqì bù hǎo, hángbān qǔxiāo le.",vn:"Do thời tiết xấu, chuyến bay bị hủy."}
    ]
   }
  ],
  sentences: [
   {parts:["与其","抱怨","不如","努力","改变","。"],vn:"Thà nỗ lực thay đổi còn hơn than phiền."},
   {parts:["由于","经验","不足","他","没有","被","录取","。"],vn:"Do kinh nghiệm không đủ, anh ấy không được tuyển."},
   {parts:["不是","我","不想","去","而是","没有","时间","。"],vn:"Không phải tôi không muốn đi mà là không có thời gian."},
   {parts:["尽管","困难","很","多","他","从来","不","放弃","。"],vn:"Mặc dù khó khăn rất nhiều, anh ấy không bao giờ bỏ cuộc."}
  ]
 },
 {
  level: 6,
  grammarPoints: [
   {
    title: "以…为… - Lấy...làm...",
    formula: "以 + A + 为 + B",
    note: "Cấu trúc văn viết, trang trọng. Nghĩa: lấy A làm B, coi A là B.",
    examples: [
     {zh:"我们要以学生为中心。",py:"Wǒmen yào yǐ xuéshēng wéi zhōngxīn.",vn:"Chúng ta cần lấy học sinh làm trung tâm."}
    ]
   },
   {
    title: "何必 - Cần gì phải (phản vấn)",
    formula: "何必 + Động từ (+ 呢)?",
    note: "Dùng để hỏi tu từ, ý khuyên không cần thiết làm gì.",
    examples: [
     {zh:"何必着急呢，慢慢来。",py:"Hébì zháojí ne, mànmàn lái.",vn:"Cần gì phải vội, từ từ thôi."}
    ]
   },
   {
    title: "不惜 - Bất chấp, không ngại",
    formula: "不惜 + Động từ/Danh từ",
    note: "Biểu thị sẵn sàng hy sinh, không tiếc. Thường dùng trong ngữ cảnh quyết tâm.",
    examples: [
     {zh:"他不惜一切代价也要成功。",py:"Tā bùxī yíqiè dàijià yě yào chénggōng.",vn:"Anh ấy bất chấp mọi giá cũng phải thành công."}
    ]
   }
  ],
  sentences: [
   {parts:["我们","以","质量","为","核心","。"],vn:"Chúng tôi lấy chất lượng làm cốt lõi."},
   {parts:["何必","为","小事","生气","呢","？"],vn:"Cần gì phải vì chuyện nhỏ mà tức giận?"},
   {parts:["他","不惜","代价","追求","梦想","。"],vn:"Anh ấy bất chấp giá nào cũng theo đuổi ước mơ."},
   {parts:["与其","浪费","时间","不如","多","看","书","。"],vn:"Thà đọc sách nhiều hơn còn hơn lãng phí thời gian."}
  ]
 }
];
