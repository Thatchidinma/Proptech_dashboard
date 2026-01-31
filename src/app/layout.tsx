import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from 'next/font/local'
import { Messages3 } from "iconsax-reactjs";

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
              <div className="fixed bottom-20 right-20 p-[16.6px] rounded-full bg-[#242526]">
        <Messages3 variant="Bold" color="#ffffff"/>
      </div>
      </body>

    </html>
  );
}
