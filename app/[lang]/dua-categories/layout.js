import Categories from "@/app/components/duas/Categories";
import Settings from "@/app/components/shared/Settings";
import "../../globals.css";

export const metadata = {
  title: "Dua & Ruqyah",
  description: "This is a islamic dua and ruqyah app.",
};

export default async function DashboardLayout({ children }) {
  return (
    <div
      className="flex justify-center items-start gap-[30px]
 w-full pt-[43px]"
    >
      {/* category */}
      <Categories />
      {/* category page content */}

      <div className="flex-column gap-2.5 flex-1 min-h-screen w-full">
        {children}
      </div>

      {/* settings */}
      <Settings />
    </div>
  );
}
