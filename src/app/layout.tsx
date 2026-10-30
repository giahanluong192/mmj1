import type { Metadata, Viewport } from "next";
import { Merriweather, K2D } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tri thức Đại học Cần Thơ: Từ nghiên cứu đến sản xuất thực tiễn | Báo chí Dữ liệu",
  description: "Phóng sự dữ liệu chuyên sâu về hơn 30 năm tri thức Nông - Thủy sản Đại học Cần Thơ: Từ lúa kháng rầy 1991, công nghiệp cá tra tỷ USD đến giống lúa Nông Dân và sinh sản nhân tạo cá bông lau.",
  keywords: [
    "Đại học Cần Thơ",
    "Nông nghiệp",
    "Thủy sản",
    "Lúa Nông Dân",
    "Cá bông lau",
    "Cá tra",
    "CTU-RAS",
    "Artemia Vĩnh Châu",
    "Báo chí dữ liệu",
    "Đồng bằng sông Cửu Long",
  ],
  authors: [{ name: "Nhóm Phóng sự Dữ liệu & Đồ họa ĐBSCL" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#064e3b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${merriweather.variable} ${k2d.variable}`}>
      <body>{children}</body>
    </html>
  );
}
