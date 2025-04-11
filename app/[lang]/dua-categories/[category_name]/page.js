import Categories from "@/app/components/duas/Categories";

export default async function DuaCategoriesPage() {
  return (
    <div
      className="flex-center gap-[30px] h-full
   w-full"
    >
      <Categories />
      <div className="flex-1 w-full border">dua page content</div>
      <div className="max-w-[330px] border w-full flex-end"></div>
    </div>
  );
}
