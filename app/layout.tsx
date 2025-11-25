import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/src/components/organisms/header";

export const metadata: Metadata = {
  title: "Mirach",
  description: "Airborne innovation with precision",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Mirach" }],
  publisher: "Mirach",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mirach-dev.vercel.app/",
    siteName: "Mirach",
    title: "Mirach",
    description: "Airborne innovation with precision",
    images: [
      {
        url: "https://mirach-dev.vercel.app/mirach-aerospace.webp",
        width: 1200,
        height: 630,
        alt: "Mirach",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirach",
    description: "Airborne innovation with precision",
    images: ["https://mirach-dev.vercel.app/mirach-aerospace.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-lightBlack font-neue-montreal antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
