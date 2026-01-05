import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/src/components/organisms/header";
import { Lenis } from "@/src/lib/lenisSmoothScroll";
import { Footer } from "@/src/components/organisms/footer";

export const metadata: Metadata = {
  title: "Mirach Aerospace",
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
  authors: [{ name: "Mirach Aerospace" }],
  publisher: "Mirach Aerospace",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mirachaerospace.com/",
    siteName: "Mirach Aerospace",
    title: "Mirach Aerospace",
    description: "Airborne innovation with precision",
    images: [
      {
        url: "https://mirachaerospace.com/mirach-aerospace.webp",
        width: 1200,
        height: 630,
        alt: "Mirach Aerospace",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirach Aerospace",
    description: "Airborne innovation with precision",
    images: ["https://mirachaerospace.com/mirach-aerospace.webp"],
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
        <Lenis root options={{}} />
        <Footer />
      </body>
    </html>
  );
}
