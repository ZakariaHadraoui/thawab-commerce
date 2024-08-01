"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function CategoryList() {
  return (
	<div className="px-4 overflow-x-scroll scrollbar-hide">
	<Swiper
	  slidesPerView={1} 
	  spaceBetween={20}
	  breakpoints={{
		
		640: { 
		},
		768: { 
		  slidesPerView: 2,
		},
		1024: { 
		  slidesPerView: 2,
		},
		1280: { 
		  slidesPerView: 2,
		},
	  }}
	  className="mySwiper"
	>
	  <SwiperSlide>
		<Link href={`/`} className="flex-shrink-0 w-full sm:w-full lg:w-1/4 xl:w-1/4">
		  <div className="relative bg-slate-100 w-full h-96">
			<Image
			  src={"/woman.png"}
			  alt="Shoes"
			  fill
			  sizes="20vw"
			  className="object-cover"
			/>
		  </div>
		  <h1 className="mt-8 font-semibold text-3xl tracking-wide ml-4">
			shoes
		  </h1>
		</Link>
	  </SwiperSlide>
	  <SwiperSlide>
		<Link href={`/`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4">
		  <div className="relative bg-slate-100 w-full h-96">
			<Image
			  src={"/woman.png"}
			  alt="Shoes"
			  fill
			  sizes="20vw"
			  className="object-cover"
			/>
		  </div>
		  <h1 className="mt-8 text-3xl font-light  tracking-wide ml-4 font-semibold">
			shoes
		  </h1>
		</Link>
	  </SwiperSlide>
	  <SwiperSlide>
		<Link href={`/`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4">
		  <div className="relative bg-slate-100 w-full h-96">
			<Image
			  src={"/woman.png"}
			  alt="Shoes"
			  fill
			  sizes="20vw"
			  className="object-cover"
			/>
		  </div>
		  <h1 className="mt-8 font-light text-3xl tracking-wide ml-4 font-semibold">
			shoes
		  </h1>
		</Link>
	  </SwiperSlide>
	  {/* Add more SwiperSlide components as needed */}
	</Swiper>
  </div>
  )
}

export default CategoryList