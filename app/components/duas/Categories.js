import { getMainCategories } from "@/app/db/queries";
import Category from "./Category";
import SearchByCategory from "./SearchByCategory";

const Categories = () => {
  const categories = getMainCategories();

  return (
    <div className="w-[429px] relative">
      <div className="w-[429px] rounded-[10px] fixed">
        <div className="py-[18px] bg-primary text-center rounded-tr-[10px] rounded-tl-[10px] text-white font-semibold text-[17px]">
          Category
        </div>
        <div className="flex flex-col px-[15px] gap-[15px] py-[15px] h-[calc(100vh-234.5px)] bg-white rounded-b-[10px] border-[0.5px] border-quaternary border-t-0">
          <SearchByCategory />
          <div className="overflow-y-scroll">
            {categories?.data?.length > 0 ? (
              categories?.data?.map((category) => (
                <Category key={category.cat_id} category={category} />
              ))
            ) : (
              <div className="h-20 flex-center rounded-[5px] text-primary font-semibold bg-tertiary-200">
                No Category Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
