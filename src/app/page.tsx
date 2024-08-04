import CategoryList from "@/components/CategoryList"
import Slider from "@/components/Slider"
import { wixClientServer } from "@/lib/WixClientServer"
import { Suspense } from "react"
import dynamic from "next/dynamic"



const ProductList = dynamic(() => import('@/components/ProductList'), {
  ssr: false,
});


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
    <div className='dark:bg-[#021526]'>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">Featured Products</h1>

       <Suspense fallback={'loading '}>
         <ProductList categID={process.env.FEATURED_CATEGORY_ID!} limit={6}/>
       </Suspense>

      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl mb-12 px-4">Categories</h1>

      <CategoryList/>

      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl mb-12 px-4">New products</h1>

      <Suspense fallback={'loading '}>
         <ProductList categID={process.env.FEATURED_CATEGORY_ID!} limit={6}/>
       </Suspense>


      </div>

      {/* <h1 className="text-center mt-4 text-3xl font-bold">غفرَ اللهُ لرجلٍ كان قَبلَكم ، كان سهلًا إذا باعَ ، سهلًا إذا اشترَى ، سهلًا إذا اقْتضَى التَّعلُّمُ مِن الأمَمِ السَّابِقةِ</h1> */}
    </div>
  )
}

export default HomePage