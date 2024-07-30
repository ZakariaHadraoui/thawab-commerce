import Image from "next/image";
import Link from "next/link";


const PRODUCT_PER_PAGE = 8;

const ProductList = async () => {

  

 

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link
          href={"/"}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
         
        >
          <div className="relative w-full h-80">
            <Image
              src={"https://images.pexels.com/photos/24702077/pexels-photo-24702077/free-photo-of-chaussures-blanches-avec-lignes-vertes.jpeg?auto=compress&cs=tinysrgb&w=600"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
              <Image
                src={"https://images.pexels.com/photos/2666149/pexels-photo-2666149.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product name</span>
            <span className="font-semibold">2000 Dhs</span>
          </div>
            <div
              className="text-sm text-gray-500"
              
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
          
          <button className="rounded-2xl ring-1 transition-all easy duration-500   ring-zak text-zak w-max py-2 px-4 text-xs hover:bg-zak hover:text-white">
            Add to Cart
          </button>
        </Link>
        <Link
          href={"/"}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
         
        >
          <div className="relative w-full h-80">
            <Image
              src={"https://images.pexels.com/photos/24702077/pexels-photo-24702077/free-photo-of-chaussures-blanches-avec-lignes-vertes.jpeg?auto=compress&cs=tinysrgb&w=600"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
              <Image
                src={"https://images.pexels.com/photos/2666149/pexels-photo-2666149.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product name</span>
            <span className="font-semibold">2000 Dhs</span>
          </div>
            <div
              className="text-sm text-gray-500"
              
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
          
          <button className="rounded-2xl ring-1 transition-all easy duration-500   ring-zak text-zak w-max py-2 px-4 text-xs hover:bg-zak hover:text-white">
            Add to Cart
          </button>
        </Link>
        <Link
          href={"/"}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
         
        >
          <div className="relative w-full h-80">
            <Image
              src={"https://images.pexels.com/photos/24702077/pexels-photo-24702077/free-photo-of-chaussures-blanches-avec-lignes-vertes.jpeg?auto=compress&cs=tinysrgb&w=600"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
              <Image
                src={"https://images.pexels.com/photos/2666149/pexels-photo-2666149.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product name</span>
            <span className="font-semibold">2000 Dhs</span>
          </div>
            <div
              className="text-sm text-gray-500"
              
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
          
          <button className="rounded-2xl ring-1 transition-all easy duration-500   ring-zak text-zak w-max py-2 px-4 text-xs hover:bg-zak hover:text-white">
            Add to Cart
          </button>
        </Link>
       
    
    </div>
  );
};

export default ProductList;