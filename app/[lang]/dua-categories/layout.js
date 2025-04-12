import { Inter } from "next/font/google";

import Categories from "@/app/components/duas/Categories";
import Settings from "@/app/components/shared/Settings";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masud Rana | Dashboard",
  description:
    "Discover Masud Rana's portfolio - a skilled Frontend Developer specializing in React and Next.js. Explore projects, skills, and expertise in building modern web applications.",
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

      <div className="flex-column gap-2.5 flex-1 w-full">{children}</div>

      {/* <PageContent /> */}
      {/* settings */}
      <Settings />
    </div>
  );
}
