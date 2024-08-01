import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thawab shop",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Ol1_JKT5UJTk5gEDKeldzGmTOQYjjhZBmHSZkQ30ULw" />
      </head>
      
      <body className='dark:bg-[#021526]' suppressHydrationWarning>
        <WixClientContextProvider>
            <Providers>

            <Navbar/>
        
            {children}

            <Footer/>
            </Providers>

        </WixClientContextProvider>
      
      </body>
    </html>
  );
}
