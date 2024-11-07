import type { Metadata } from "next";
import "./globals.css";
import { PPMori, NanumSquareRound } from "./font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PPMori.variable} ${NanumSquareRound.variable}`}>
        {children}
      </body>
    </html>
  );
}
