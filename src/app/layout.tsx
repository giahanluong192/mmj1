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
  title: "TP.HCM ngập ở đâu và lộ trình khắc phục ra sao? | Báo Dữ liệu Tương tác",
  description: "Trang trình bày trực quan hóa bài báo dữ liệu toàn cảnh 159 điểm ngập úng tại TP.HCM và lộ trình 142.000 tỉ đồng chống ngập đến năm 2030.",
  keywords: ["TP.HCM", "Ngập úng", "Báo dữ liệu", "Data Journalism", "Chống ngập", "Thủ Đức", "Triều cường"],
  authors: [{ name: "Nhóm Phóng viên Dữ liệu" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090d16",
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
