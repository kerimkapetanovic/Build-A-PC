import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from 'next/head';
import "./globals.css";

const audiowide = localFont({
  src: '/fonts/Audiowide-Regular.woff',
  display: 'swap',
  variable: '--font-audiowide',
});

export const metadata: Metadata = {
  title: "Build-A-PC",
  description: "A functional website",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={audiowide.variable}>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>Build-A-PC</title>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}