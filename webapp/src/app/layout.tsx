import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "دور البعثات الدبلوماسية والقنصلية في أعمال الحماية الدبلوماسية",
  description:
    "بحث علمي حول دور البعثات الدبلوماسية والقنصلية في الحماية الدبلوماسية بمنهجية البحث العلمي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
