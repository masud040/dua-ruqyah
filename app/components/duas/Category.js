"use client";
import IntroImage from "@/public/assets/icons/intro.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Category = ({ category }) => {
  const { category_name } = useParams();
  const decodeCategoryName = decodeURIComponent(category_name);
  const [subCategories, setSubCategories] = useState([]);
  const categoryRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const subcat_id = searchParams.get("subcat_id");
  const params = new URLSearchParams(searchParams);
  //   formatting the category name to match the URL structure
  const formatted_name = category?.cat_name_en.replace(/ /g, "-");

  //   Fetching subcategories based on the category ID
  useEffect(() => {
    async function getSubCategories() {
      const res = await fetch(`/api/subcategories/${category?.cat_id}`);
      const data = await res.json();
      setSubCategories(data);
    }
    getSubCategories();
  }, [category?.cat_id]);

  // Scroll into view when selected
  useEffect(() => {
    if (formatted_name === category_name && categoryRef.current) {
      categoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [category_name, formatted_name]);

  function handleSubCatClick(subcat_id) {
    params.set("subcat_id", subcat_id);
    router.push(`?${params.toString()}`);
  }

  return (
    <div ref={categoryRef}>
      <Link
        scroll={false}
        href={`/dua-categories/${encodeURIComponent(
          formatted_name
        )}?subcat_id=${subCategories[0]?.subcat_id}`}
      >
        <div
          className={`flex-center border-b-[1px] border-[#F9F9F9] gap-4 p-2.5 transition-all duration-300 ease-in-out ${
            formatted_name === decodeCategoryName
              ? "bg-tertiary-300 rounded-[10px]"
              : "rounded-[5px]"
          }`}
        >
          <div
            className={`p-2.5 rounded-[10px] flex-center 
        ${
          formatted_name === decodeCategoryName
            ? "bg-[#CFE0E5]"
            : "bg-tertiary-300"
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
      {/* show sub category when select the main category */}
      {decodeCategoryName === formatted_name && (
        <div className="overflow-hidden animate-expand">
          <div className="ps-[24px]">
            <ol className="relative border-l-2 border-dotted hover:cursor-pointer border-primary">
              {subCategories.length > 0 &&
                subCategories.map((item) => (
                  <li
                    key={item.subcat_id}
                    className="my-3 ml-[19px] flex-start hover:cursor-pointer"
                    onClick={() => {
                      handleSubCatClick(item.subcat_id);
                    }}
                  >
                    <span className="absolute -left-[5px] w-2 h-2 bg-primary rounded-full shadow flex items-center justify-center"></span>
                    <p
                      className={`font-medium ${
                        Number(subcat_id) === item.subcat_id && "text-primary"
                      }`}
                    >
                      {item?.subcat_name_en}
                    </p>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
