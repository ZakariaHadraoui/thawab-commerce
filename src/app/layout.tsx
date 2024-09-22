import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import { Providers } from "./providers";
import dynamic from "next/dynamic";




const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <p>Loading...</p>,
})


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thawab shop",
  description: " A clothing , Accessory Shopping Website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>  
          <link rel="shortcut icon" href="assets/imgs/favicon.ico"/>

          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&amp;display=swap"
              rel="stylesheet"/>

          <link rel="stylesheet" href="/common/css/plugins.css"/>
       

          <link rel="stylesheet" href="/common/css/common_style.css"/>
          <link rel="stylesheet" href="/assets/css/home2-style.css"/>
          <meta name="google-site-verification" content="Ol1_JKT5UJTk5gEDKeldzGmTOQYjjhZBmHSZkQ30ULw" />
      </head>
      
      <body className='' >
      <>
  {/* ==================== Start Loading ==================== */}
  <div className="loader-wrap">
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
    </svg>
    <div className="loader-wrap-heading">
      <div className="load-text">
        <span>ZakSolutions</span>
      
      </div>
    </div>
  </div>
  {/* ==================== End Loading ==================== */}
  <div className="cursor" />
</>

        <WixClientContextProvider>
            <Providers>

            <Navbar/>


            <div id="smooth-wrapper">
              <div id="smooth-content">
                <main>
                {children}


                </main>

              </div>

            </div>
        
  
            {/* <Footer/> */}
            </Providers>

        </WixClientContextProvider>
          <script src="/common/js/lib/jquery-3.6.0.min.js"></script>
          <script src="/common/js/lib/jquery-migrate-3.4.0.min.js"></script>

          <script src="/common/js/lib/plugins.js"></script>

          <script src="/common/js/gsap_lib/gsap.min.js"></script>
          <script src="/common/js/gsap_lib/ScrollSmoother.min.js"></script>
          <script src="/common/js/gsap_lib/ScrollTrigger.min.js"></script>
          <script src="/common/js/gsap_lib/SplitText.min.js"></script>

          <script src="/common/js/common_scripts.js"></script>

        
          <script src="/assets/js/scripts.js"></script>
      </body>
    </html>
  );
}
