export const mockUser = {
  name: "Minh Anh",
  grade: "Lớp 10",
  goal: "Cải thiện tư duy",
  streak: 7,
  totalLessons: 42,
  xp: 1250,
  resumeLesson: "Logic cơ bản: Cầu vồng trà sữa",
};

export const features = [
  {
    title: "Bài học tương tác, nhìn là hiểu",
    description: "Video ngắn, câu hỏi click chọn, giải thích trực quan ngay sau mỗi bước.",
    icon: "🧠",
  },
  {
    title: "Bài tập ngắn mỗi ngày, không áp lực",
    description: "5-10 phút/ngày với streak, điểm thưởng và nhắc lịch nhẹ nhàng.",
    icon: "⏱️",
  },
  {
    title: "Ví dụ đời sống: trà sữa, game, TikTok",
    description: "Tình huống gần gũi giúp hiểu nhanh: chia tiền đi ăn, chọn lượt chơi, đoán trend.",
    icon: "📱",
  },
  {
    title: "Bảng xếp hạng & streak giống game",
    description: "Leo rank cùng bạn, giữ streak, mở khóa huy hiệu logic xịn xò.",
    icon: "🔥",
  },
];

export const topics = [
  {
    id: "logic",
    name: "Logic",
    level: "Cơ bản",
    progress: 68,
    badge: "Đang hot",
    description: "Các dạng suy luận, phủ định, kéo theo, mô hình hóa tình huống đời sống.",
    lessons: [
      { title: "Cầu vồng trà sữa", tag: "trà sữa", summary: "Đếm xác suất chọn topping random." },
      { title: "Bắn súng sơn", tag: "game", summary: "Chiến thuật loại trừ đối thủ bằng suy luận." },
      { title: "Chọn ghế xem phim", tag: "hẹn hò", summary: "Tối ưu vị trí ngồi với điều kiện chéo." },
    ],
  },
  {
    id: "prob",
    name: "Xác suất & Thống kê",
    level: "Nâng cao",
    progress: 42,
    badge: "Mới",
    description: "Hiểu khả năng xảy ra và đọc số liệu TikTok, bóng đá, thời tiết.",
    lessons: [
      { title: "Đoán trend TikTok", tag: "tiktok", summary: "Dự đoán view tăng hay giảm." },
      { title: "Vòng quay may mắn", tag: "trò chơi", summary: "Xác suất nhận quà khi quay." },
      { title: "Sample size trà sữa", tag: "trà sữa", summary: "Bao nhiêu người thử là đủ tin cậy?" },
    ],
  },
  {
    id: "critical",
    name: "Tư duy phản biện",
    level: "Cơ bản",
    progress: 55,
    badge: "",
    description: "Nhận diện bias, thông tin sai, lập luận chặt chẽ trong tranh luận.",
    lessons: [
      { title: "Tin giả khuyến mãi", tag: "mua sắm", summary: "Kiểm tra nguồn tin trước khi chia sẻ." },
      { title: "So sánh học phí", tag: "giáo dục", summary: "Đọc điều khoản nhỏ khi chọn khóa học." },
      { title: "Bias khi review phim", tag: "phim", summary: "Nhận biết cảm xúc ảnh hưởng đánh giá." },
    ],
  },
];

export const testimonials = [
  { name: "Lan - Lớp 9", quote: "Làm bài 10 phút mà hiểu gốc rễ, không còn sợ môn Toán logic." },
  { name: "Thầy Quân", quote: "Dùng làm hoạt động mở đầu giờ STEM, lớp hào hứng hẳn." },
  { name: "Chị Mai - Phụ huynh", quote: "Con tự học mỗi tối, vẫn thấy vui như chơi game." },
];

export const leaderboard = [
  { name: "Hải", grade: "12A1", xp: 1280, streak: 21 },
  { name: "Linh", grade: "10A3", xp: 1150, streak: 14 },
  { name: "Minh", grade: "11A2", xp: 1040, streak: 9 },
  { name: "Thảo", grade: "9A1", xp: 980, streak: 12 },
  { name: "Huy", grade: "8A2", xp: 910, streak: 7 },
];

export const plans = [
  {
    name: "Miễn phí",
    price: "0đ",
    perks: ["5 bài/tuần", "Quảng cáo nhẹ", "Bảng xếp hạng cơ bản"],
  },
  {
    name: "Pro cá nhân",
    price: "79.000đ/tháng",
    perks: ["Mở khóa toàn bộ chủ đề", "Thử thách mỗi ngày", "Phân tích chi tiết"],
    highlight: true,
  },
  {
    name: "Gói Trường học",
    price: "Liên hệ",
    perks: ["Dashboard giáo viên", "Báo cáo lớp", "Tích hợp CLB STEM"],
  },
];

export const badges = [
  { name: "Newbie", desc: "Hoàn thành bài đầu tiên" },
  { name: "Streak 7 ngày", desc: "Duy trì học 7 ngày liên tục" },
  { name: "Master Logic", desc: "100% khóa Logic Cơ bản" },
];

export const statsByWeek = [12, 14, 16, 20, 18, 22, 25];

export const challenge = {
  question: "Một quán trà sữa có 3 loại topping: trân châu, thạch dừa, phô mai; chọn ngẫu nhiên 2 topping. Xác suất để hai topping giống nhau là bao nhiêu?",
  options: ["0% vì topping khác nhau", "33%", "50%", "Không đủ dữ kiện"],
  correctIndex: 0,
  explanation:
    "Có 3 lựa chọn đồng nhất (2 trân châu, 2 thạch, 2 phô mai) trên tổng 3*3=9 trường hợp, nên xác suất 3/9 = 1/3 ≈ 33%.",
};
