import { getAllCategories } from "@/app/db/queries";
import SearchIcon from "@/public/assets/icons/search.svg";
import Image from "next/image";

const Categories = async () => {
  const categories = await getAllCategories();
  return (
    <div className="w-[429px] bg-white rounded-[10px] h-full">
      <div className="flex flex-col gap-[15px] bg-white">
        <div className="py-[18px] bg-primary text-center rounded-tr-[10px] rounded-tl-[10px] text-white font-semibold text-[17px]">
          Category
        </div>
        <div className="px-[15px] relative bg-white">
          <input
            type="text"
            placeholder="Search by Categories"
            className="w-full text-[#868686] h-[50px] p-[13px] ps-8 border-[1.5px] border-quaternary bg-white focus:outline-none rounded-[7px]"
          />

          <Image
            src={SearchIcon}
            alt="Search"
            className="size-[16.5px] absolute left-6 top-1/2 bg-white -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
