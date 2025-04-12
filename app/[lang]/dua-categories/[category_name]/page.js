import DuaCard from "@/app/components/duas/DuaCard";
import {
  getDuasFromSubCategoryId,
  getSubCategoryNameById,
} from "@/app/db/queries";

export default async function DuaDeatailsPage({ searchParams }) {
  const { subcat_id } = await searchParams;
  const subcat_name = getSubCategoryNameById(subcat_id);
  const duas = getDuasFromSubCategoryId(subcat_id);

  return (
    <>
      <div className="flex-start border-[0.5px] border-quaternary rounded-[10px] font-medium px-[30px] py-[15px] gap-2.5 bg-white">
        <p className="text-primary">Section:</p>
        <p>{subcat_name?.data?.subcat_name_en}</p>
      </div>
      {duas?.data?.length > 0 ? (
        duas?.data?.map((dua, index) => (
          <DuaCard key={index + 1} dua={{ ...dua, index }} />
        ))
      ) : (
        <div className="bg-white rounded-[10px] h-30 border-[0.5px] border-quaternary px-[30px] py-[15px] flex-center text-primary">
          No Dua Found
        </div>
      )}
    </>
  );
}
