import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Two Side Group — Two Worlds. One Group.",
  description:
    "Two Side Group builds technology across the digital and physical worlds, spanning software, AI, automation, industry, hardware, commerce and intelligence.",
  keywords: [
    "Two Side Group",
    "TSG",
    "TS Technologies",
    "TS Industries",
    "TS Enterprises",
    "TS Intelligence",
    "Digital Physical Technology",
    "Hardware and Software Engineering",
    "AI Systems",
    "Industrial Automation",
  ],
  authors: [{ name: "Two Side Group" }],
  creator: "Two Side Group",
  publisher: "Two Side Group",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://twosidegroup.com",
    siteName: "Two Side Group",
    title: "Two Side Group — Two Worlds. One Group.",
    description:
      "Building technology across the digital and physical worlds. Software, AI, Hardware, Industry, and Intelligence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Side Group — Two Worlds. One Group.",
    description:
      "Building technology across the digital and physical worlds. Software, AI, Hardware, Industry, and Intelligence.",
  },
};

export const viewport: Viewport = {
  themeColor: "#040507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#040507] text-[#EDEDF2] antialiased selection:bg-cyan-500/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
