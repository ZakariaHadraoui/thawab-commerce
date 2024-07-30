import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">Featured Products</h1>

      <ProductList/>

      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl mb-12 px-4">Categories</h1>

      <CategoryList/>

      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl mb-12 px-4">New products</h1>

      <ProductList/>

      </div>

      {/* <h1 className="text-center mt-4 text-3xl font-bold">غفرَ اللهُ لرجلٍ كان قَبلَكم ، كان سهلًا إذا باعَ ، سهلًا إذا اشترَى ، سهلًا إذا اقْتضَى التَّعلُّمُ مِن الأمَمِ السَّابِقةِ</h1> */}
    </div>
  )
}

export default HomePage