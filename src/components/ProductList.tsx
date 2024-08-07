import { wixClientServer } from "@/lib/WixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";


const PRODUCT_PER_PAGE = 10;

const ProductList = async ({
  categID,
  limit,
  
  } : {
  
    categID:string ;
    limit?:number ;
  }) => {

    const wixClient = await wixClientServer();
    const res =  await wixClient.products
    .queryProducts()
    .eq("collectionIds",categID)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();
    console.log(res.items);
    

  

 

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
       {res.items.map((product:products.Product)=>{
        return (
          <Link
          href={`/${product.slug}`}
          key={product._id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
         
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
              {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
            
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.price?.price} Dhs</span>
          </div>
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: product.description ? product.description : '',
              }}



              
            />
          
          <button className="rounded-2xl ring-1 transition-all easy duration-500   ring-zak text-zak w-max py-2 px-4 text-xs hover:bg-zak hover:text-white">
            Add to Cart
          </button>
        </Link>
        )
       })}
        
       
    
    </div>
  );
};

export default ProductList;