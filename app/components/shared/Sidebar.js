import Bookmarks from "@/public/assets/icons/bookmarks.svg";
import Books from "@/public/assets/icons/books.svg";
import DonateIcon from "@/public/assets/icons/donate_icon.svg";
import DuaInfo from "@/public/assets/icons/dua_info.svg";
import Home from "@/public/assets/icons/home.svg";
import Memorize from "@/public/assets/icons/memorize.svg";
import Menu from "@/public/assets/icons/menu.svg";
import Ruqyah from "@/public/assets/icons/ruqyah.svg";
import Logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
const Sidebar = () => {
  return (
    <aside className="w-[100px] h-[calc(100vh-80px)] px-[14px] py-[31px] bg-white rounded-[24px] flex-center flex-col fixed z-40">
      <div>
        <Image src={Logo} alt="Dua & Ruqyah" sizes="73" />
      </div>
      <ul className="flex-1 flex-center flex-col gap-[27px]">
        <SidebarLink
          Icon={Home}
          Name="Home"
          Path={"/dua-categories/Dua's-Importance?subcat_id=1"}
        />
        <SidebarLink
          Icon={Menu}
          Name="Dua"
          Path={"/dua-categories/Dua's-Importance?subcat_id=1"}
        />
        <SidebarLink
          Icon={Memorize}
          Name="Memorize"
          Path={"/dua-categories/Dua's-Importance?subcat_id=1"}
        />
        <SidebarLink
          Icon={Bookmarks}
          Name="Bookmarks"
          Path={"/dua-categories/Dua's-Importance?subcat_id=1"}
        />
        <SidebarLink
          Icon={Ruqyah}
          Name="Ruqyah"
          Path={"/dua-categories/Dua's-Importance?subcat_id=1"}
        />
        <SidebarLink
          Icon={DuaInfo}
          Name="DuaInfo"
          Path={"/dua-categories/Dua's-Importance?subcat_id=1"}
        />
        <SidebarLink
          Icon={Books}
          Name="Books"
          Path={"/dua-categories/Dua's-Importance?subcat_id=1"}
        />
      </ul>
      <div className="bg-primary size-[57px] flex-center rounded-[10px]">
        <Image
          src={DonateIcon}
          alt="Donate"
          className="bg-primary"
          sizes="24"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
