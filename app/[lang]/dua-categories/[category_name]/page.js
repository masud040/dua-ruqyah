import Categories from "@/app/components/duas/Categories";
import PageContent from "@/app/components/duas/PageContent";
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
      <PageContent />
      {/* settings */}
      <Settings />
    </section>
  );
}
