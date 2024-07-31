"use client"
import Image from 'next/image'
import React, { useState } from 'react'
const images = [
	{id:1,url:'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600'},
	{id:2,url:'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600'},

	{id:3,url:'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600'},
	{id:4,url:'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600'},
	

]

function ProductImages() {
	const[index,setIndex]=useState(0)
  return (
	<div className=''>
		<div className='h-[500px] relative'>
			<Image 
			 alt=''
			 fill
			 className='object-cover rounded-md'
			 src={images[index].url}
		     sizes='50vw'
			 />

		</div>
		<div className='flex justify-between gap-4 mt-1'>
			{images.map((img,i)=>{
				return (
					<div onClick={()=>setIndex(i)} key={img.id} className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'>
			           <Image 
			            alt=''
			            fill
			            className='object-cover rounded-md'
			            src={img.url}
		                sizes='30vw'
			            />

			        </div>
				)
			})}
		
			

		</div>

	</div>
  )
}

export default ProductImages