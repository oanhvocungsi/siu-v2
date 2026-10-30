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

## Bản 3 (thêm)
- Tiêu đề (logo + tên) ở đỉnh màn hình, căn giữa, cỡ chữ tự co theo thiết bị.
- Nền mới: sóng tím–xanh góc dưới, lấp lánh, bóng dưới chân mèo; chữ "Small steps / Big goals" (màn ≥1700px).
- Three.js (cdnjs r128, tải trong Index.html): sao gợn sóng dải màu, trái tim, mũ cử nhân rơi. Tự tắt nếu thiếu WebGL; tự giảm khi máy yếu (<38fps → chế độ "lite").
- Cảnh bay: vẽ thêm tia điện toả toàn màn hình + hạt sáng + quầng sáng; viền clip làm mờ để không thấy khung video; clip chỉ hiện khi khung đầu sẵn sàng (chuyển mượt, không nháy).
- Sửa nhân đôi ký tự trên điện thoại: bỏ autocapitalize, không ghi đè giá trị ô khi đang gõ, đo vị trí có nhớ tạm.

## Bản 4 (thêm)
- Viền clip ở màn đăng nhập làm mờ cả 4 cạnh (đầu mèo/sách bị cắt trong clip gốc giờ tan vào nền thay vì lộ đường cắt).
- Icon mũ cử nhân cố định góc trái trên; chỉ còn trái tim + sao 4 cánh gợn sóng rơi, chậm hơn nhiều.
- DÁN mã lớp / PIN: từng ký tự rơi lần lượt vào ô (chữ to), mèo gõ nhanh trong lúc đó.
- Sửa "Đổi lớp": nút "Đang xử lý…" không còn bị kẹt, đăng nhập lớp khác được ngay.

## Bản 5 – mèo sprite (không video) ở màn đăng nhập
- Mèo ở màn đăng nhập giờ là các lớp ảnh ghép bằng code (60fps): thở, nghiêng đầu, chớp mắt, mắt nhìn theo ký tự đang gõ / con trỏ, tai giật, đuôi vẫy, tua mũ đung đưa, miệng nhép theo phím.
- Mặt: gõ (miệng mở/cười), dán (ngạc nhiên + giật), sai PIN (buồn + lắc đầu), gửi xong (mắt cười + nhảy). Cảnh bay + logo vẫn dùng video.
- Upload thêm thư mục `assets/rig/img/` (30 file .webp) lên repo, cùng chỗ với `video/`.
- Chưa có: tay gõ, laptop, điện thoại (chờ lớp ảnh sửa). Tai/đuôi/mũ đang dùng lớp tạm, sẽ thay khi có bản sửa (chỉ cần ghi đè file cùng tên).
