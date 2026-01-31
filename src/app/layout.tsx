import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Protech Dashboard",
  description: "",
};

const myFont = localFont({
  src: './fonts/EuclidCircularBRegular.ttf',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${myFont.className}`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
