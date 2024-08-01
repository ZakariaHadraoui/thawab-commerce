"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState,useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const slides = [
  {
    id: 1,
    title: "Winter Sale Collections" ,
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/22882784/pexels-photo-22882784/free-photo-of-femmes-algeriennes.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/7277590/pexels-photo-7277590.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/7956659/pexels-photo-7956659.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
    {domLoaded && <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row`}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <Link href={'/'}>
                  <button className="rounded-md bg-black text-white py-3 px-4">
                    SHOP NOW
                  </button>
                </Link>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>}
  </div>
  );
};

export default Slider;