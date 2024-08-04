import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

// import NavIcons from "./NavIcons";


const Navbar = () => {
  return (
    <div className="h-20 bg-white dark:bg-[#021526] dark:text-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
     
      {/* BIGGER SCREENS */}
      <div className=" flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
		  <Image alt="thawab" src='/logg.png' height={100} width={100} objectFit="cover" />
		  
          </Link>
          
        </div>
        {/* RIGHT */}
        <div className="ml-56 md:ml-4 w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar/>
		      <NavIcons/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;