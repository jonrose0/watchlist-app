import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./ui/nav";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <header className="flex flex-wrap justify-between gap-4 p-8 shadow-sm shadow-[#ffffff79]">
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
