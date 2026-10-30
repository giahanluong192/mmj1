import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
