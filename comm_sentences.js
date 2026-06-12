// Communication Sentences - Các mẫu câu giao tiếp (Q&A format)
// Format: [Hán tự, Pinyin, Nghĩa, type] — type: "Q"=câu hỏi, "A"=câu trả lời, ""=câu thường
const COMM_SENTENCES = [
 {
  category: "💬 Chào hỏi",
  sentences: [
   ["你好！", "Nǐ hǎo!", "Xin chào!"],
   ["您好！", "Nín hǎo!", "Xin chào (trang trọng)!"],
   ["早上好！", "Zǎoshang hǎo!", "Chào buổi sáng!"],
   ["下午好！", "Xiàwǔ hǎo!", "Chào buổi chiều!"],
   ["晚上好！", "Wǎnshang hǎo!", "Chào buổi tối!"],
   ["晚安。", "Wǎn'ān.", "Chúc ngủ ngon."],
   ["再见！", "Zàijiàn!", "Tạm biệt!"],
   ["拜拜！", "Bāibāi!", "Bye bye!"],
   ["好久不见！", "Hǎojiǔ bùjiàn!", "Lâu rồi không gặp!"],
   ["回头见！", "Huítóu jiàn!", "Hẹn gặp lại sau!"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Sức khỏe",
  sentences: [
   ["你好吗？", "Nǐ hǎo ma?", "Bạn có khỏe không?", "Q"],
   ["我很好，谢谢！你呢？", "Wǒ hěn hǎo, xièxie! Nǐ ne?", "Tôi rất khỏe, cảm ơn! Còn bạn?", "A"],
   ["最近怎么样？", "Zuìjìn zěnmeyàng?", "Dạo này thế nào?", "Q"],
   ["还不错，就是有点忙。", "Hái búcuò, jiùshì yǒudiǎn máng.", "Cũng tạm, chỉ là hơi bận.", "A"],
   ["你身体好吗？", "Nǐ shēntǐ hǎo ma?", "Sức khỏe của bạn tốt không?", "Q"],
   ["最近不太舒服，感冒了。", "Zuìjìn bù tài shūfu, gǎnmào le.", "Dạo này không được khỏe, bị cảm rồi.", "A"],
   ["你睡得好吗？", "Nǐ shuì de hǎo ma?", "Bạn ngủ có ngon không?", "Q"],
   ["昨晚睡得不好，一直失眠。", "Zuó wǎn shuì de bù hǎo, yīzhí shīmián.", "Tối qua ngủ không ngon, mất ngủ suốt.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Làm quen",
  sentences: [
   ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?", "Q"],
   ["我叫阮明。很高兴认识你！", "Wǒ jiào Ruǎn Míng. Hěn gāoxìng rènshi nǐ!", "Tôi tên Nguyễn Minh. Rất vui được làm quen!", "A"],
   ["你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?", "Q"],
   ["我是越南人，来自河内。", "Wǒ shì Yuènán rén, láizì Héněi.", "Tôi là người Việt Nam, đến từ Hà Nội.", "A"],
   ["你今年多大？", "Nǐ jīnnián duō dà?", "Năm nay bạn bao nhiêu tuổi?", "Q"],
   ["我二十五岁。", "Wǒ èrshíwǔ suì.", "Tôi hai mươi lăm tuổi.", "A"],
   ["你是做什么工作的？", "Nǐ shì zuò shénme gōngzuò de?", "Bạn làm nghề gì?", "Q"],
   ["我是工程师，在科技公司上班。", "Wǒ shì gōngchéngshī, zài kējì gōngsī shàngbān.", "Tôi là kỹ sư, làm ở công ty công nghệ.", "A"],
   ["你学中文多久了？", "Nǐ xué Zhōngwén duōjiǔ le?", "Bạn học tiếng Trung bao lâu rồi?", "Q"],
   ["我学了两年了，但是还在努力！", "Wǒ xué le liǎng nián le, dànshì hái zài nǔlì!", "Tôi học được hai năm rồi, nhưng vẫn đang cố gắng!", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Mua sắm",
  sentences: [
   ["这个多少钱？", "Zhège duōshao qián?", "Cái này bao nhiêu tiền?", "Q"],
   ["这个一百二十块。", "Zhège yī bǎi èrshí kuài.", "Cái này một trăm hai mươi tệ.", "A"],
   ["能便宜点儿吗？", "Néng piányi diǎnr ma?", "Có thể rẻ hơn một chút không?", "Q"],
   ["好吧，给你九十块。", "Hǎo ba, gěi nǐ jiǔshí kuài.", "Được rồi, cho bạn chín mươi tệ.", "A"],
   ["有没有其他颜色？", "Yǒu méiyǒu qítā yánsè?", "Có màu khác không?", "Q"],
   ["有，我们有红色、蓝色和黑色。", "Yǒu, wǒmen yǒu hóngsè、lánsè hé hēisè.", "Có, chúng tôi có màu đỏ, xanh và đen.", "A"],
   ["可以试穿吗？", "Kěyǐ shì chuān ma?", "Có thể mặc thử không?", "Q"],
   ["当然可以，试衣间在那边。", "Dāngrán kěyǐ, shì yī jiān zài nàbiān.", "Tất nhiên được, phòng thử đồ ở đằng kia.", "A"],
   ["你们收信用卡吗？", "Nǐmen shōu xìnyòngkǎ ma?", "Các bạn nhận thẻ tín dụng không?", "Q"],
   ["收的，也可以用手机支付。", "Shōu de, yě kěyǐ yòng shǒujī zhīfù.", "Có nhận, cũng có thể thanh toán bằng điện thoại.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Nhà hàng",
  sentences: [
   ["你们有什么招牌菜？", "Nǐmen yǒu shénme zhāopáicài?", "Nhà hàng các bạn có món đặc trưng gì?", "Q"],
   ["我们的招牌菜是红烧肉和麻婆豆腐。", "Wǒmen de zhāopáicài shì hóngshāo ròu hé mápó dòufu.", "Món đặc trưng của chúng tôi là thịt kho và đậu phụ ma bà.", "A"],
   ["这道菜辣吗？", "Zhè dào cài là ma?", "Món này có cay không?", "Q"],
   ["有一点辣，你可以要求少放辣椒。", "Yǒu yīdiǎn là, nǐ kěyǐ yāoqiú shǎo fàng làjiāo.", "Hơi cay, bạn có thể yêu cầu cho ít ớt thôi.", "A"],
   ["可以打包吗？", "Kěyǐ dǎbāo ma?", "Có thể gói mang về không?", "Q"],
   ["没问题，我帮你打包。", "Méi wèntí, wǒ bāng nǐ dǎbāo.", "Không vấn đề, tôi sẽ gói cho bạn.", "A"],
   ["买单！", "Mǎidān!", "Tính tiền!", "Q"],
   ["好的，一共三百二十块。", "Hǎo de, yīgòng sān bǎi èrshí kuài.", "Vâng, tổng cộng ba trăm hai mươi tệ.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Hỏi đường",
  sentences: [
   ["请问，地铁站怎么走？", "Qǐngwèn, dìtiězhàn zěnme zǒu?", "Xin hỏi, đi đến ga tàu điện ngầm như thế nào?", "Q"],
   ["一直往前走，然后左拐就到了。", "Yīzhí wǎng qián zǒu, ránhòu zuǒ guǎi jiù dào le.", "Đi thẳng về phía trước, rồi rẽ trái là đến.", "A"],
   ["这里离机场远吗？", "Zhèlǐ lí jīchǎng yuǎn ma?", "Từ đây đến sân bay có xa không?", "Q"],
   ["不太远，打车大概二十分钟。", "Bù tài yuǎn, dǎchē dàgài èrshí fēnzhōng.", "Không xa lắm, đi taxi khoảng hai mươi phút.", "A"],
   ["附近有公共厕所吗？", "Fùjìn yǒu gōnggòng cèsuǒ ma?", "Gần đây có nhà vệ sinh công cộng không?", "Q"],
   ["有，就在那个便利店旁边。", "Yǒu, jiù zài nàge biànlìdiàn pángbiān.", "Có, ngay cạnh cửa hàng tiện lợi kia.", "A"],
   ["去天安门怎么坐地铁？", "Qù Tiān'ānmén zěnme zuò dìtiě?", "Đến Thiên An Môn thì đi tàu điện ngầm tuyến nào?", "Q"],
   ["坐一号线，在天安门东站下车。", "Zuò yī hào xiàn, zài Tiān'ānmén Dōng zhàn xià chē.", "Đi tuyến số 1, xuống ở ga Thiên An Môn Đông.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Học tập",
  sentences: [
   ["你学中文为什么？", "Nǐ xué Zhōngwén wèishénme?", "Tại sao bạn học tiếng Trung?", "Q"],
   ["因为我对中国文化很感兴趣。", "Yīnwèi wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", "Vì tôi rất hứng thú với văn hóa Trung Quốc.", "A"],
   ["这个词是什么意思？", "Zhège cí shì shénme yìsi?", "Từ này có nghĩa là gì?", "Q"],
   ["这个词的意思是“努力”。", "Zhège cí de yìsi shì 'nǔlì'.", "Từ này có nghĩa là 'cố gắng, chăm chỉ'.", "A"],
   ["你一天学几个小时？", "Nǐ yītiān xué jǐ gè xiǎoshí?", "Mỗi ngày bạn học mấy tiếng?", "Q"],
   ["我每天学一到两个小时。", "Wǒ měitiān xué yī dào liǎng gè xiǎoshí.", "Tôi học mỗi ngày từ một đến hai tiếng.", "A"],
   ["这个发音对吗？", "Zhège fāyīn duì ma?", "Phát âm này có đúng không?", "Q"],
   ["声调不太对，应该是第四声。", "Shēngdiào bù tài duì, yīnggāi shì dì sì shēng.", "Thanh điệu chưa đúng, phải là thanh thứ tư.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Công việc",
  sentences: [
   ["你在哪里工作？", "Nǐ zài nǎlǐ gōngzuò?", "Bạn làm việc ở đâu?", "Q"],
   ["我在一家互联网公司工作。", "Wǒ zài yī jiā hùliánwǎng gōngsī gōngzuò.", "Tôi làm ở một công ty internet.", "A"],
   ["你的工作压力大吗？", "Nǐ de gōngzuò yālì dà ma?", "Công việc của bạn có áp lực nhiều không?", "Q"],
   ["还好，不过有时候加班比较多。", "Hái hǎo, búguò yǒu shíhòu jiābān bǐjiào duō.", "Cũng ổn, nhưng đôi khi phải tăng ca nhiều.", "A"],
   ["你一个月的工资是多少？", "Nǐ yī gè yuè de gōngzī shì duōshao?", "Lương mỗi tháng của bạn là bao nhiêu?", "Q"],
   ["这个不太方便说，不好意思。", "Zhège bù tài fāngbiàn shuō, bù hǎoyìsi.", "Cái này hơi bất tiện nói, xin lỗi nhé.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Thời tiết",
  sentences: [
   ["今天天气怎么样？", "Jīntiān tiānqì zěnmeyàng?", "Thời tiết hôm nay thế nào?", "Q"],
   ["今天很热，有三十五度。", "Jīntiān hěn rè, yǒu sānshíwǔ dù.", "Hôm nay rất nóng, khoảng ba mươi lăm độ.", "A"],
   ["明天会下雨吗？", "Míngtiān huì xià yǔ ma?", "Ngày mai có mưa không?", "Q"],
   ["天气预报说明天有雨，带把伞吧。", "Tiānqì yùbào shuō míngtiān yǒu yǔ, dài bǎ sǎn ba.", "Dự báo thời tiết nói ngày mai có mưa, mang ô theo nhé.", "A"],
   ["你喜欢什么季节？", "Nǐ xǐhuān shénme jìjié?", "Bạn thích mùa nào?", "Q"],
   ["我最喜欢秋天，天气凉爽，景色也很美。", "Wǒ zuì xǐhuān qiūtiān, tiānqì liángshuǎng, jǐngsè yě hěn měi.", "Tôi thích mùa thu nhất, thời tiết mát mẻ, phong cảnh rất đẹp.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Sở thích",
  sentences: [
   ["你平时喜欢做什么？", "Nǐ píngshí xǐhuān zuò shénme?", "Thường ngày bạn thích làm gì?", "Q"],
   ["我喜欢看电影和打篮球。", "Wǒ xǐhuān kàn diànyǐng hé dǎ lánqiú.", "Tôi thích xem phim và chơi bóng rổ.", "A"],
   ["你喜欢吃什么菜？", "Nǐ xǐhuān chī shénme cài?", "Bạn thích ăn món gì?", "Q"],
   ["我最喜欢吃火锅，特别是四川火锅。", "Wǒ zuì xǐhuān chī huǒguō, tèbié shì Sìchuān huǒguō.", "Tôi thích ăn lẩu nhất, đặc biệt là lẩu Tứ Xuyên.", "A"],
   ["你会弹吉他吗？", "Nǐ huì tán jítā ma?", "Bạn có biết chơi đàn guitar không?", "Q"],
   ["会一点，但是弹得不太好。", "Huì yīdiǎn, dànshì tán de bù tài hǎo.", "Biết một chút, nhưng chơi chưa giỏi lắm.", "A"],
   ["你看过什么好看的中国电影？", "Nǐ kàn guò shénme hǎokàn de Zhōngguó diànyǐng?", "Bạn đã xem bộ phim Trung Quốc hay nào chưa?", "Q"],
   ["我看过《流浪地球》，特效很厉害！", "Wǒ kàn guò 《Liúlàng Dìqiú》, tèxiào hěn lìhai!", "Tôi đã xem 'Wandering Earth', kỹ xảo rất ấn tượng!", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Du lịch",
  sentences: [
   ["你去过中国哪些地方？", "Nǐ qù guò Zhōngguó nǎxiē dìfāng?", "Bạn đã đến những nơi nào ở Trung Quốc?", "Q"],
   ["我去过北京、上海和成都。", "Wǒ qù guò Běijīng、Shànghǎi hé Chéngdū.", "Tôi đã đến Bắc Kinh, Thượng Hải và Thành Đô.", "A"],
   ["去中国旅游需要签证吗？", "Qù Zhōngguó lǚyóu xūyào qiānzhèng ma?", "Đi du lịch Trung Quốc có cần visa không?", "Q"],
   ["越南人需要申请签证，可以网上办理。", "Yuènán rén xūyào shēnqǐng qiānzhèng, kěyǐ wǎngshàng bànlǐ.", "Người Việt cần xin visa, có thể làm online.", "A"],
   ["北京有什么好玩的地方？", "Běijīng yǒu shénme hǎowán de dìfāng?", "Bắc Kinh có nơi nào vui chơi không?", "Q"],
   ["长城、故宫和颐和园都很值得去。", "Chángchéng、Gùgōng hé Yíhéyuán dōu hěn zhídé qù.", "Vạn Lý Trường Thành, Tử Cấm Thành và Di Hòa Viên đều rất đáng đến.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Y tế",
  sentences: [
   ["你哪里不舒服？", "Nǐ nǎlǐ bù shūfu?", "Bạn thấy không khỏe ở đâu?", "Q"],
   ["我头很疼，而且有点发烧。", "Wǒ tóu hěn téng, érqiě yǒudiǎn fāshāo.", "Tôi đau đầu và hơi sốt nữa.", "A"],
   ["你对什么过敏吗？", "Nǐ duì shénme guòmǐn ma?", "Bạn bị dị ứng với gì không?", "Q"],
   ["我对海鲜过敏。", "Wǒ duì hǎixiān guòmǐn.", "Tôi bị dị ứng với hải sản.", "A"],
   ["这个药怎么吃？", "Zhège yào zěnme chī?", "Thuốc này uống như thế nào?", "Q"],
   ["每天三次，每次两片，饭后服用。", "Měitiān sān cì, měi cì liǎng piàn, fàn hòu fúyòng.", "Mỗi ngày ba lần, mỗi lần hai viên, uống sau khi ăn.", "A"],
  ]
 },
 {
  category: "❓ Hỏi & Đáp — Điện thoại & Mạng",
  sentences: [
   ["这里有WiFi吗？密码是什么？", "Zhèlǐ yǒu WiFi ma? Mìmǎ shì shénme?", "Ở đây có WiFi không? Mật khẩu là gì?", "Q"],
   ["有，密码是：ABC12345。", "Yǒu, mìmǎ shì: ABC12345.", "Có, mật khẩu là: ABC12345.", "A"],
   ["我的手机没有信号。", "Wǒ de shǒujī méiyǒu xìnhào.", "Điện thoại của tôi không có sóng.", "Q"],
   ["你可以试试重启一下手机。", "Nǐ kěyǐ shìshi chóngqǐ yīxià shǒujī.", "Bạn có thể thử khởi động lại điện thoại xem.", "A"],
   ["你用什么app联系朋友？", "Nǐ yòng shénme app liánxi péngyou?", "Bạn dùng app gì để liên lạc với bạn bè?", "Q"],
   ["我主要用微信，偶尔也用微博。", "Wǒ zhǔyào yòng Wēixìn, ǒu'ěr yě yòng Wēibó.", "Tôi chủ yếu dùng WeChat, thỉnh thoảng cũng dùng Weibo.", "A"],
  ]
 },
 {
  category: "🙏 Cảm ơn & Xin lỗi",
  sentences: [
   ["谢谢你！", "Xièxie nǐ!", "Cảm ơn bạn!"],
   ["非常感谢！", "Fēicháng gǎnxiè!", "Cảm ơn rất nhiều!"],
   ["不客气，这是应该的。", "Bú kèqi, zhè shì yīnggāi de.", "Không có gì, đó là điều nên làm."],
   ["对不起，我来晚了。", "Duìbuqǐ, wǒ lái wǎn le.", "Xin lỗi, tôi đến muộn."],
   ["没关系，不用道歉。", "Méi guānxi, bùyòng dàoqiàn.", "Không sao đâu, không cần xin lỗi."],
   ["麻烦你了！", "Máfan nǐ le!", "Làm phiền bạn rồi!"],
   ["能帮我一个忙吗？", "Néng bāng wǒ yīgè máng ma?", "Bạn có thể giúp tôi một việc không?"],
   ["当然，需要什么帮助？", "Dāngrán, xūyào shénme bāngzhù?", "Tất nhiên, cần giúp gì nào?"],
  ]
 },
 {
  category: "🚨 Khẩn cấp",
  sentences: [
   ["救命！", "Jiùmìng!", "Cứu tôi với!"],
   ["帮帮我！", "Bāng bang wǒ!", "Giúp tôi với!"],
   ["叫救护车！", "Jiào jiùhùchē!", "Gọi xe cứu thương!"],
   ["叫警察！", "Jiào jǐngchá!", "Gọi cảnh sát!"],
   ["着火了！", "Zháohuǒ le!", "Cháy rồi!"],
   ["我迷路了。", "Wǒ mí lù le.", "Tôi bị lạc đường."],
   ["我的包被偷了。", "Wǒ de bāo bèi tōu le.", "Túi của tôi bị trộm rồi."],
   ["请帮我报警。", "Qǐng bāng wǒ bào jǐng.", "Xin giúp tôi báo cảnh sát."],
  ]
 },
];
