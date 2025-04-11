import Image from "next/image";

import SearchIcon from "@/public/assets/icons/search.svg";
const Search = () => {
  return (
    <div className="w-full hidden md:flex md:justify-end relative">
      <input
        type="text"
        placeholder="Search By Dua Name"
        className="h-[52px] w-full max-w-[371px] ps-[16px] py-1 pr-1 border-[0.5px] border-quaternary text-[#868686] bg-white focus:outline-none rounded-[10px]"
      />
      <div className="h-[44px] w-[54px] absolute right-1 top-1/2 flex-center bg-tertiary-200 rounded-[6px] -translate-y-1/2">
        <Image src={SearchIcon} alt="Search" className="size-6" />
      </div>
    </div>
  );
};

export default Search;
