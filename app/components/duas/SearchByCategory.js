import SearchIcon from "@/public/assets/icons/search.svg";
import Image from "next/image";
const SearchByCategory = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by Categories"
        className="w-full text-secondary-300 h-[50px] p-[13px] ps-8 border-[1.5px] border-quaternary bg-white focus:outline-none rounded-[7px]"
      />

      <Image
        src={SearchIcon}
        alt="Search"
        sizes="16.5"
        className="absolute left-2 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default SearchByCategory;
