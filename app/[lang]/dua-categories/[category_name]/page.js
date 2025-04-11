import Categories from "@/app/components/duas/Categories";

export default async function DuaCategoriesPage() {
  return (
    <section
      className="flex-center gap-[30px] h-full
   w-full "
    >
      {/* category */}
      <Categories />
      {/* category page content */}
      <div className="flex-1 w-full border">dua page content</div>
      {/* settings */}
      <div className="max-w-[330px] border w-full flex-end"></div>
    </section>
  );
}
