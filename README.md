# Điểm danh SIU – bản 2 (mèo mascot video)

## Cấu trúc
- `apps-script/` : Code.gs, Index.html, Style.html, Script.html → dán vào Apps Script (giữ tên file).
- `assets/` : `logo.png`, `video/*.mp4`, `poster/*.jpg` → upload vào repo `oanhvocungsi/siu-vip`, thư mục `assets/` (giữ tên file).
- `preview-index.html` : mở thẳng trên trình duyệt để xem thử.

## Thử nghiệm
Mã lớp **ABCDEFGH**, PIN **1234** → vào được. Nhập gì khác → mèo bối rối/buồn + báo sai.
(Code.gs hiện là backend thử nghiệm; khi chạy thật thay thân 3 hàm `apiLogin/apiSubmit/apiReportWrong` bằng code cũ.)

## Đã thay đổi so với bản 1
- Khoá giao diện sáng (`color-scheme: light only`) → không bị Chrome tự chuyển nền tối. Nếu vẫn tối: tắt chrome://flags/#enable-force-dark.
- Mèo luôn chuyển động: ngồi (1.5s tỉnh dậy rồi lặp), gõ xong vẫn gõ chậm (không đứng khựng).
- Lấy máy ra ~2s (tua nhanh); gõ sớm hơn thì nhảy thẳng tới đoạn đặt máy rồi gõ.
- Chữ bay giới hạn tần suất (không dính cục khi gõ nhanh).
- Điện thoại: bàn phím mở → trang thu gọn, mèo + 2 ô nhập + nút luôn nhìn thấy.
- PC (≥900px): mèo bên trái lớn, form bên phải (hết bị ép khung điện thoại).
- Chuỗi bay rút còn ~3s: chuẩn bị 0.7s → bay → hạ cánh 1s → ngước nhìn + logo. Mèo nhỏ hơn, vòng logo ở giữa màn hình, nền tia sáng toả ra từ vòng.
- Bấm logo: tia điện nổ + mèo nhảy mừng + "✓ Thành công!" cùng lúc (~1s).
- Sai: clip sai cắt còn ~2.8s rồi mèo quay lại gõ chậm. Gửi xong: clip mừng ~2.7s.

## Chỉnh nhanh (đầu Script.html)
`DEV` (đoạn cắt/tua clip), `PORTRAIT_H` (độ lớn mèo ở màn logo), `FLY_SCALE`, `IDLE_RATE`, `ASSET_BASE`.
