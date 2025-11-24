import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/src/components/organisms/header";

export const metadata: Metadata = {
  title: "Mirach",
  description: "Airborne innovation with precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-lightBlack font-neue-montreal antialiased`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
