import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { wixClientServer } from '@/lib/WixClientServer'
import Image from 'next/image'
import React, { Suspense } from 'react'



export async function generateMetadata({ searchParams }) {
	const cat = searchParams.cat;
	const wixClient = await wixClientServer();
	const category = await wixClient.collections.getCollectionBySlug(
	  searchParams.cat || "all-products"
	);
  
	return {
	  title: `${cat} For You! - Discount up to 50% on new products`,
	  description: `Get a discount up to 50% on new products in the ${cat} category.`,
	  keywords: [cat, "discount thawab shop maroc", "new products"],
	 
	};
  }

async function ListPage(
  {searchParams}:{searchParams : any}

) {
	const cat =searchParams.cat
	const wixClient = await wixClientServer()

	const category = await wixClient.collections.getCollectionBySlug(
		searchParams.cat || "all-products"
	  );
	
  return (
	<div className='px-4  md:px-8 lg:px-16 xl:px-32 relative'>
		<div className=' hidden sm:flex  bg-pink-100 rounded-2xl p-4  justify-between h-64'>
			<div className='w-2/3 flex flex-col items-center justify-center gap-8'>
			   <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Get a discount up to 50% on new products</h1>
			   <button className='bg-zak rounded-3xl text-white w-max px-4 py-3'>Buy now</button>


			</div>
			<div className=" relative w-1/3">
             <Image src="/woman.png" alt="" fill className="object-contain" />
            </div>

		</div>
		<Filter/>
		<h1 className="mt-12 text-2xl md:text-4xl font-semibold">{cat} For You!</h1>
		<Suspense fallback={'loading.....'}>
		<ProductList
          categID={
            category.collection?._id || "00000000-000000-000000-000000000001"
          }
          
        />
		</Suspense>


	</div>
  )
}

export default ListPage