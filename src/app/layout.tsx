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
  title: "Việt Nam thiếu gì để giữ chân siêu sao quốc tế? | Báo chí Dữ liệu Đa phương tiện",
  description:
    "Khi khán giả Việt đã sẵn sàng chi tiền triệu lấp đầy những sân vận động 50.000 chỗ trong vài giờ, bài toán sức mua không còn là lý do giải thích cho sự vắng bóng của các siêu sao toàn cầu. Phân tích 3 tầng điểm nghẽn và lời giải từ Nghị quyết 80-NQ/TW.",
  keywords: [
    "Việt Nam thiếu gì để giữ chân siêu sao quốc tế",
    "Công nghiệp biểu diễn Việt Nam",
    "World Tour Đông Nam Á",
    "Nghị quyết 80-NQ/TW",
    "Báo cáo âm nhạc RMIT 2025-2026",
    "ARPU nhạc số Đông Nam Á",
    "Báo chí dữ liệu",
  ],
  authors: [{ name: "Nhóm Thực hiện Báo chí Dữ liệu Đa phương tiện" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1120",
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
