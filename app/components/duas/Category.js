"use client";
import IntroImage from "@/public/assets/icons/intro.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Category = ({ category }) => {
  const { category_name } = useParams();
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    async function getSubCategories() {
      const res = await fetch(`/api/subcategories/${category?.cat_id}`);
      const data = await res.json();
      console.log(data);
      setSubCategories(data);
    }
    getSubCategories();
  }, []);
  //   formatting the category name to match the URL structure
  const formatted_name = category?.cat_name_en.replace(/ /g, "_");

  return (
    <>
      <Link href={`/dua-categories/${formatted_name}`}>
        <div
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
            <Image src={IntroImage} alt={category.cat_name_en} sizes="40" />
          </div>
          <div className="flex-1 w-full">
            <h2 className="font-semibold">{category.cat_name_en}</h2>
            <p className="text-[14px] text-tertiary-400">
              Subcategory: {category?.no_of_subcat}{" "}
            </p>
          </div>
          <div>
            <h2 className="font-semibold">{category?.no_of_dua}</h2>
            <p className="text-[14px] text-tertiary-400">Duas</p>
          </div>
        </div>
      </Link>
      {category_name === formatted_name && (
        <div className="overflow-hidden animate-expand">
          <div className="ps-[24px]">
            <ol className="relative border-l-2 border-dotted border-primary">
              {subCategories.length > 0 &&
                subCategories.map((item) => (
                  <li
                    key={item.subcat_id}
                    className="my-3 ml-[19px] flex-start"
                  >
                    <span className="absolute -left-[5px] w-2 h-2 bg-primary rounded-full shadow flex items-center justify-center"></span>
                    <h3 className="font-medium">{item?.subcat_name_en}</h3>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
