"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function CategoryList() {
  return (
	<div className="px-4 overflow-x-scroll scrollbar-hide">
	<div className="flex gap-4 md:gap-8">
	<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
		<SwiperSlide>
			<Link
		  href={`/`}
		  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4"
		  
		>
		  <div className="relative bg-slate-100 w-full h-96">
			<Image
			  src={"/woman.png"}
			  alt=""
			  fill
			  sizes="20vw"
			  className="object-cover"
			/>
		  </div>
		  <h1 className="mt-8 font-light text-xl tracking-wide">
			shoes
		  </h1>
		</Link>
		</SwiperSlide>
		<SwiperSlide>
			<Link
		  href={`/`}
		  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4"
		  
		>
		  <div className="relative bg-slate-100 w-full h-96">
			<Image
			  src={"/woman.png"}
			  alt=""
			  fill
			  sizes="20vw"
			  className="object-cover"
			/>
		  </div>
		  <h1 className="mt-8 font-light text-xl tracking-wide">
			shoes
		  </h1>
		</Link>
		</SwiperSlide>
		<SwiperSlide>
			<Link
		  href={`/`}
		  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4"
		  
		>
		  <div className="relative bg-slate-100 w-full h-96">
			<Image
			  src={"/woman.png"}
			  alt=""
			  fill
			  sizes="20vw"
			  className="object-cover"
			/>
		  </div>
		  <h1 className="mt-8 font-light text-xl tracking-wide">
			shoes
		  </h1>
		</Link>
		</SwiperSlide>
		<SwiperSlide>
			<Link
		  href={`/`}
		  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4"
		  
		>
		  <div className="relative bg-slate-100 w-full h-96">
			<Image
			  src={"/woman.png"}
			  alt=""
			  fill
			  sizes="20vw"
			  className="object-cover"
			/>
		  </div>
		  <h1 className="mt-8 font-light text-xl tracking-wide">
			shoes
		  </h1>
		</Link>
		</SwiperSlide>
	</Swiper>
		
		
	
	</div>
  </div>
  )
}

export default CategoryList