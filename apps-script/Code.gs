/** Điểm danh lớp học phần – SIU. Dán file này + Index/Style/Script.html vào dự án Apps Script. */
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('Điểm danh lớp học phần – SIU')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(name) { return HtmlService.createHtmlOutputFromFile(name).getContent(); }

/* ===== BACKEND THỬ NGHIỆM =====
   Lớp ABCDEFGH + PIN 1234 → vào được (dữ liệu mẫu). Mọi thứ khác → báo sai (để xem hoạt ảnh sai).
   Khi chạy thật: thay thân 3 hàm này bằng code cũ của bạn (xóa khóa/secret trước khi chia sẻ). */
function apiLogin(classId, pin) {
  if (String(classId).trim().toUpperCase() !== 'ABCDEFGH' || String(pin).trim() !== '1234')
    return { ok: false, message: 'Mã lớp hoặc mã PIN không đúng.' };
  var names = ['Nguyễn Ngọc Gia Bảo','Nguyễn Văn Bắc','Lê Đại Nam','Trần Mỹ Ngọc','Nguyễn Anh Quân','Võ Văn Thúy Sơn'];
  return { ok: true,
    cls: { name: 'CƠ SỞ DỮ LIỆU', term: 'HK1 2026-2027', code: 'ABCDEFGH', size: names.length, teacher: 'Giảng viên mẫu', leader: 'Lê Đại Nam' },
    sessions: Array.from({ length: 15 }, function (_, i) { return { n: i + 1, label: 'Buổi ' + (i + 1) }; }),
    students: names.map(function (n, i) { return { mssv: '9748260' + (4231 + i * 37), name: n, cls: '26CNTT' }; }) };
}
function apiSubmit(payload)      { return { ok: true, message: 'Đã gửi điểm danh (thử nghiệm).' }; }
function apiReportWrong(payload) { return { ok: true }; }
