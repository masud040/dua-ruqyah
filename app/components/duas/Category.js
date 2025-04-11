"use client";
import IntroImage from "@/public/assets/icons/intro.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
const Category = ({ category }) => {
  const { category_name } = useParams();
  const formatted_name = category?.title.replace(/ /g, "_");
  return (
    <Link
      href={`/dua-categories/${formatted_name}`}
      className={`flex-center border-b-[1px] border-[#F9F9F9] gap-4 p-2.5 transition-all duration-300 ease-in-out ${
        formatted_name === category_name
          ? "bg-tertiary-300 rounded-[10px]"
          : "rounded-[5px]"
      }`}
    >
      <div
        className={`p-2.5 rounded-[10px] flex-center 
        ${
          formatted_name === category_name ? "bg-[#CFE0E5]" : "bg-tertiary-300"
        } `}
      >
        <Image src={IntroImage} alt={category.title} sizes="40" />
      </div>
      <div className="flex-1 w-full">
        <h2 className="font-semibold">{category?.title}</h2>
        <p className="text-[14px] text-tertiary-400">
          Subcategory: {category?.subcategory}{" "}
        </p>
      </div>
      <div>
        <h2 className="font-semibold">{category?.totalDuas}</h2>
        <p className="text-[14px] text-tertiary-400">Duas</p>
      </div>
    </Link>
  );
};

export default Category;
