import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

function ListPage() {
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
		<h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>
        <ProductList
          
        />

	</div>
  )
}

export default ListPage