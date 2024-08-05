import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import { wixClientServer } from '@/lib/WixClientServer'
import { useParams } from 'next/navigation'
import React from 'react'



export async function generateMetadata({ params }) {
	const wixClient = await wixClientServer();
	const products = await wixClient.products.queryProducts().find();
  
	const product = products.items.find((product) => product.slug === params.slug);
  
	if (!product) {
	  return {
		title: 'Product not found',
	  };
	}
  
	return {
	  title: product.name,
	 
	};
  }

function SinglePage() {
	
  return (
	<div className=' mb-56 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-16 lg:flex-row'>
		<div className='w-full lg:w-1/2 lg:sticky top-12 h-max'>
			<ProductImages/>

		</div>
		<div className='w-full lg:w-1/2 flex flex-col gap-6'>

			<h1 className='text-4xl font-medium'>Product name </h1>
			<p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nostrum harum, itaque accusantium laborum asperiores tempora quod hic labore deleniti.</p>
			<div className='h-[2px] bg-gray-100'/>
			<div className='flex gap-4 items-center'>
				<h3 className='text-xl text-gray-500 line-through'>2000 dhs</h3>
				<h2 className='font-medium text-2xl'>1399 dhs</h2>
			</div>
			<div className='h-[2px] bg-gray-100'/>
			<CustomizeProducts/>
			<Add/>
			<div className='h-[2px] bg-gray-100'/>
			<div className='text-sm'>
				<h4 className='font-medium mb-4'>Title</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis sint quidem iure fuga rem delectus consequatur dolore odit sapiente modi consequuntur, beatae exercitationem harum deserunt cum dicta aliquid itaque.</p>
			</div>
			<div className='text-sm'>
				<h4 className='font-medium mb-4'>Title</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis sint quidem iure fuga rem delectus consequatur dolore odit sapiente modi consequuntur, beatae exercitationem harum deserunt cum dicta aliquid itaque.</p>
			</div>
			<div className='text-sm'>
				<h4 className='font-medium mb-4'>Title</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis sint quidem iure fuga rem delectus consequatur dolore odit sapiente modi consequuntur, beatae exercitationem harum deserunt cum dicta aliquid itaque.</p>
			</div>

		</div>
	</div>
  )
}

export default SinglePage