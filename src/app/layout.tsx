import type { Metadata } from "next";
import "./globals.css";
import { PPMori, NanumSquareRound } from "./font";
import Lenis from "@/component/lenis/lenis";

export const metadata: Metadata = {
  title: "ARA CHO",
  description: "This app is ARA CHO's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PPMori.variable} ${NanumSquareRound.variable}`}>
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
