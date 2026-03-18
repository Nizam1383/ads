import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Gateway - Unlock Your Content",
  description: "Complete the steps to access your content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Pop-under Ad Script */}
        <Script 
          src="https://pl28938643.effectivegatecpm.com/ce/98/7d/ce987d5617b66a4e3f971d1345b37f99.js"
          strategy="afterInteractive"
        />
        {/* Additional Pop-under */}
        <Script 
          src="https://pl28938657.effectivegatecpm.com/35/33/16/3533169f95d2d051ffd28dfb6039e44a.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
