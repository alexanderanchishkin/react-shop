import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aboba SHOP",
  description: "Generated By SCHI-IZ-PECHI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="https://telegram.org/js/telegram-web-app.js" async />
        {children}
      </body>
    </html>
  );
}
