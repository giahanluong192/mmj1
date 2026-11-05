import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bản đồ Concert Việt Nam: Sức bật nội sinh | Báo chí Dữ liệu Đa phương tiện",
  description:
    "Phóng sự dữ liệu đa phương tiện giải mã làn sóng concert nội sinh 2024–2026 (810+ sự kiện/năm), bài toán bền vững của kinh tế đêm địa phương, khoảng cách đón World Tour quốc tế và bệ phóng thể chế từ Nghị quyết 80-NQ/TW.",
  keywords: [
    "Bản đồ Concert Việt Nam",
    "Sức bật nội sinh",
    "Công nghiệp văn hóa",
    "Anh Trai Vượt Ngàn Chông Gai",
    "Anh Trai Say Hi",
    "Tổ Quốc Trong Tim",
    "Nghị quyết 80-NQ/TW",
    "Ngày Văn hóa Việt Nam 24/11",
    "Báo cáo âm nhạc RMIT 2025-2026",
    "Báo chí dữ liệu",
  ],
  authors: [{ name: "Nhóm Thực hiện Báo chí Dữ liệu Đa phương tiện" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0C10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
