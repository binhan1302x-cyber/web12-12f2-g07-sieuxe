# Tư Duy Việt SPA (vanilla modules)

Ứng dụng web một trang mô phỏng nền tảng "Tư Duy Việt" với dữ liệu giả, viết bằng HTML/CSS/JS thuần (module ES6). Không cần backend hay build tool.

## Chạy dự án
1. Cài Python (để chạy server tĩnh) hoặc dùng bất kỳ static server nào.
2. Chạy lệnh:
   ```bash
   python -m http.server 5173
   ```
3. Mở trình duyệt tại [http://localhost:5173](http://localhost:5173) để trải nghiệm app.

## Cấu trúc
- `index.html`: entry gắn script module.
- `src/styles.css`: style tổng thể mobile-first.
- `src/data.js`: dữ liệu giả (user, chủ đề, leaderboard, thử thách...).
- `src/app.js`: logic hiển thị, điều hướng đơn giản, modal bài học, thử thách.
- `src/main.js`: bootstrap ứng dụng.

## Ghi chú
- Form đăng nhập/đăng ký/checkout chỉ mô phỏng, không gửi dữ liệu thật.
- Điều hướng là client-side state, không cần refresh trang.
