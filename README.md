# TP.HCM Ngập Ở Đâu & Lộ Trình Khắc Phục Ra Sao?
> **Báo Dữ Liệu Tương Tác (Data Journalism & Scrollytelling Web App)**

Dự án trực quan hóa toàn cảnh **159 điểm ngập úng** tại TP.HCM và vùng đô thị mở rộng, phân tích các nguyên nhân cốt lõi (mưa cực đoan, triều cường lịch sử, lún sụt & bê tông hóa) và lộ trình giải ngân hơn **142.000 tỉ đồng** đến năm 2030.

Repository: [https://github.com/v06012005/mmj1](https://github.com/v06012005/mmj1)

---

## 🌟 Tính Năng Nổi Bật

1. **Bản Đồ Ngập Tương Tác (Interactive SVG Map)**:
   - Chiếu tọa độ địa lý thực tế (lat, lng) sang hệ trục SVG ViewBox trực quan.
   - Lọc theo mức độ nghiêm trọng (Ngập nặng), nguyên nhân (Mưa / Triều cường) và khu vực (TP. Thủ Đức, Nội thành).
   - Tra cứu và xem chi tiết độ sâu ngập (cm), thời gian nước rút (phút) và hiện trạng công trình xử lý.

2. **Dữ Liệu & Biểu Đồ Phân Tích (Data Breakdown)**:
   - Tỷ lệ phân bổ mức độ ngập và nguyên nhân gây ngập.
   - Top các khu vực có số lượng điểm ngập cao nhất.

3. **Scrollytelling & Visual Analytics**:
   - Thanh tiến trình đọc bài (Reading Progress Bar).
   - Phân tích 4 nhóm nguyên nhân cốt lõi từ góc nhìn thủy văn và quy hoạch.
   - Lộ trình 3 giai đoạn (2021-2025, 2026-2027, 2028-2030) và danh mục 87 dự án trọng điểm.

4. **Công Cụ Tiện Ích**:
   - Tra cứu nhanh điểm ngập theo tên đường hoặc quận/huyện.
   - Tải bộ dữ liệu JSON đầy đủ trực tiếp từ giao diện (`tphcm-flood-dataset-2026.json`).
   - Thăm dò ý kiến độc giả tương tác.

---

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: Next.js 16 (App Router, Server Components & Client Hydration)
- **Thư viện UI**: React 19
- **Ngôn ngữ**: TypeScript 5 (Strict Mode)
- **Styling**: Vanilla CSS (CSS Variables, Scrollytelling animations, zero runtime overhead)
- **Font**: Geist & Geist Mono (Tối ưu tự động qua `next/font`)

---

## 🚀 Khởi Chạy Dự Án Cục Bộ

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Chạy môi trường phát triển (Turbopack)
```bash
npm run dev
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

### 3. Kiểm tra mã nguồn & đóng gói sản phẩm
```bash
# Kiểm tra linting
npm run lint

# Build production
npm run build

# Khởi chạy bản build
npm start
```

---

## 📁 Cấu Trúc Thư Mục

```text
├── AGENTS.md               # Quy chuẩn AI coding agent
├── eslint.config.mjs       # Cấu hình ESLint 9
├── next.config.ts          # Cấu hình Next.js
├── package.json            # Scripts & dependencies
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Stylesheet phong cách Scrollytelling Data Journalism
│   │   ├── layout.tsx      # Root layout, metadata & viewport
│   │   └── page.tsx        # Trang bài báo dữ liệu tương tác chính
│   └── data/
│       └── articleData.ts  # Bộ dữ liệu 159 điểm ngập, biểu đồ, lộ trình & types
└── tsconfig.json           # Cấu hình TypeScript strict mode & path alias @/*
```
