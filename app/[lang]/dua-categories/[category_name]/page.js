import Categories from "@/app/components/duas/Categories";
import Settings from "@/app/components/shared/Settings";

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
      <Settings />
    </section>
  );
}
