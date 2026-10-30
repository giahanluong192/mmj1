# Tri Thức Đại Học Cần Thơ: Từ Nghiên Cứu Đến Sản Xuất Thực Tiễn
> **Báo chí Dữ liệu Đa phương tiện (Interactive Data Journalism & Scrollytelling)**

Dự án trực quan hóa hành trình hơn 30 năm tri thức ngành **Nông nghiệp & Thủy sản Đại học Cần Thơ** được kiểm chứng bằng thực tiễn sản xuất tại Đồng bằng sông Cửu Long (ĐBSCL).

Repository: [https://github.com/v06012005/mmj1](https://github.com/v06012005/mmj1)

---

## 🌟 Yếu Tố Đồ Họa & Tính Năng Nổi Bật

1. **Ảnh bìa Split-Screen & Bảng màu chủ đạo**:
   - Thiết kế ảnh bìa chia đôi: Một bên là ruộng khảo nghiệm lúa vàng óng, một bên là bể tuần hoàn nuôi cá trong phòng nghiên cứu của Đại học Cần Thơ.
   - Bảng màu: Xanh lá đậm (`#064e3b`), Trắng ngà (`#faf8f5`), điểm nhấn Vàng lúa (`#d97706`, `#f59e0b`) và Xanh nước (`#0284c7`, `#0ea5e9`).

2. **Timeline Tương Tác 2 Nhánh (Nông nghiệp & Thủy sản)**:
   - Theo dõi hành trình từ 1966 (Cao đẳng Nông nghiệp), 1976-1978 (Khoa Thủy sản), mốc 18 tấn lúa kháng rầy 1991, Dự án Catfish Asia (1995–2007) đến năm 2026 với giống lúa Nông Dân 2 và sinh sản nhân tạo cá bông lau.
   - Bộ lọc xem: Tất cả mốc son | Chỉ Nông nghiệp | Chỉ Thủy sản.

3. **Phóng Sự Ảnh Trình Tự Nghiên Cứu 5 Bước**:
   - Bước 1: Lưu giữ mẫu giống trong phòng thí nghiệm (MTL, Nông Dân 1-2).
   - Bước 2: Bố trí ruộng khảo nghiệm nghiêm ngặt ngoài thực địa.
   - Bước 3: Nhà nghiên cứu kiểm tra đặc tính bông lúa và độ chắc hạt.
   - Bước 4: Đo đạc và đánh giá chất lượng hạt gạo sau thu hoạch (Amylose, độ bền gel).
   - Bước 5: Đánh giá giống cùng nông dân tại hội thảo đầu bờ (xã Tân Hương, Đồng Tháp).

4. **Biểu Đồ Năng Suất Khảo Nghiệm & Bảng Đối Chiếu Hai Giống Lúa Nông Dân**:
   - Biểu đồ đoạn thẳng/cột thể hiện mức thấp nhất và cao nhất theo giống và mùa vụ (Đông Xuân & Hè Thu).
   - Bảng đối chiếu chi tiết chỉ tiêu sinh trưởng, hàm lượng Amylose (26,51–27,3% vs 15,2–16,4%), phẩm chất cơm và phân khúc thị trường.

5. **Trình Mô Phỏng Kịch Bản Video Ngắn Sinh Sản Cá Bông Lau (75–90s)**:
   - Trình chiếu 5 phân đoạn: Mở đầu thực địa (0-8s), Phỏng vấn nghiên cứu sinh (8-25s), Minh họa quy trình nghiên cứu (25-45s), Phỏng vấn giảng viên (45-68s), Kết luận và bước tiếp theo (68-85s).
   - Scrubber tương tác, âm thanh hiện trường và đồ họa chen giữa vòng đời cá bông lau.

6. **Đồ Họa 4: Bản Đồ Tương Tác Các Dự Án & Địa Bàn Tiếp Nhận Công Nghệ (Toggle 2 Lớp)**:
   - **Lớp Ứng dụng & Chuyển giao (ĐBSCL)**: Vĩnh Châu & Bạc Liêu (Artemia), An Giang (Cá tra AGIFISH), Cà Mau (Tôm thẻ CTU-RAS), Đồng Tháp (Lúa Nông Dân BOLD), Vùng Đồng Tháp Mười (Rửa phèn 700.000 ha), Cần Thơ (Tổng hành dinh R&D).
   - **Lớp Hợp tác R&D & Tài trợ (Quốc tế)**: Nhật Bản (JICA ODA 105,9 triệu USD), Bỉ (VLIR), Hà Lan (MHO/VH10), Châu Âu (Catfish Asia), Crop Trust (Dự án BOLD).

7. **Phỏng Vấn Độc Quyền Ba Nhóm Nguồn**:
   - Nông dân tiếp nhận (Artemia Vĩnh Châu), Sinh viên thực nghiệm (Dự án DIVERSAQUA & RAS), Giảng viên/Nhà khoa học chủ trì (chọn tạo giống lúa & chính sách vùng).

8. **Công Cụ Tra Cứu Nhanh & Tải Bộ Dữ Liệu JSON**:
   - Tra cứu tức thời theo địa phương hoặc đối tượng công nghệ.
   - Nút tải `dai-hoc-can-tho-nong-thuy-san-2026.json` phục vụ Open Data.

---

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: Next.js 16 (App Router)
- **UI & Logic**: React 19, TypeScript 5
- **Styling**: CSS Variables, Editorial Responsive Typography, Không phụ thuộc thư viện nặng ngoài
- **Đồ họa**: SVG Vector Map, Scrollytelling, CSS Range Bars

---

## 🚀 Khởi Chạy Dự Án

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy môi trường phát triển
npm run dev

# 3. Build & Khởi chạy production
npm run build
npm start
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).
