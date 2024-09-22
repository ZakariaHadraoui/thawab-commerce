import CategoryList from "@/components/CategoryList"
import Slider from "@/components/Slider"
import { wixClientServer } from "@/lib/WixClientServer"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Metadata } from "next"



const ProductList = dynamic(() => import('@/components/ProductList'), {
  ssr: false,
});
const Intro = dynamic(() => import('@/components/Intro'), {
  ssr: false,
});



export const metadata: Metadata = {
  title: "Thawab shop maroc ",
  description: " Discover new collections of products in thawab shop  ",
};



const HomePage = async() => {
  
  // const wixClient = useWixClient()
  // useEffect(() => {
  //   getProducts();
    
  
    
  // }, [])
  
  // const getProducts=async()=>{
  //   const res =  await wixClient.products.queryProducts().find();
  //   console.log(res);

  // }
  // getProducts()
  return (
    <div>
      <header className="header-ds">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-5">
        <div className="caption md-mb30">
          <h1>
            Bigger, <br /> Bolder and <br />{" "}
            <span className="play-font">Better</span>
          </h1>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="text md-mb50">
          <p>
            Based in San Francisco, we’re a digital products design &amp;
            development studio that passionate with the creation high
            applicability of digital experiences
          </p>
          <a
            href="https://uithemez.com/i/hubfolio_HTML/inner_pages/about.html"
            className="butn butn-md butn-bord butn-rounded mt-40"
          >
            <div className="d-flex align-items-center">
              <span>Learn More</span>
              <span className="icon ml-10">
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="row justify-content-between">
      <div className="col-lg-5 d-flex align-items-end">
        <div className="social-icon md-hide">
          <a href="#0">
            <i className="fa-brands fa-x-twitter" />
          </a>
          <a href="#0">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="#0">
            <i className="fa-brands fa-dribbble" />
          </a>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="numb d-flex">
          <div>
            <h2>98%</h2>
            <span>
              Clients satisfied and <br /> repeating
            </span>
          </div>
          <div className="ml-auto">
            <div>
              <h2>125+</h2>
              <span>
                projects completed in <br /> 24 countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{/* <Intro/> */}
    </div>

  )
}

export default HomePage