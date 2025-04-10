import Bookmarks from "@/public/assets/icons/bookmarks.svg";
import Books from "@/public/assets/icons/books.svg";
import DonateIcon from "@/public/assets/icons/donate_icon.svg";
import Dua from "@/public/assets/icons/dua.svg";
import DuaInfo from "@/public/assets/icons/dua_info.svg";
import Home from "@/public/assets/icons/home.svg";
import Memorize from "@/public/assets/icons/memorize.svg";
import Ruqyah from "@/public/assets/icons/ruqyah.svg";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
const Sidebar = () => {
  return (
    <div className="w-[100px]  min-h-full px-[14px] py-[31px] bg-white rounded-[24px] flex-center flex-col">
      <div>
        <Image src={Logo} alt="Dua & Ruqyah" className="bg-white size-[73px]" />
      </div>
      <ul className="flex-1 flex-center flex-col gap-[27px] h-full bg-white">
        <SidebarLink Icon={Home} Name="Home" Path={"/"} />
        <SidebarLink Icon={Dua} Name="Dua" Path={"/dua"} />
        <SidebarLink Icon={Memorize} Name="Memorize" Path={"/memorize"} />
        <SidebarLink Icon={Bookmarks} Name="Bookmarks" Path={"/bookmarks"} />
        <SidebarLink Icon={Ruqyah} Name="Ruqyah" Path={"/ruqyah"} />
        <SidebarLink Icon={DuaInfo} Name="DuaInfo" Path={"/dua-info"} />
        <SidebarLink Icon={Books} Name="Books" Path={"/books"} />
      </ul>
      <div className="bg-primary size-[57px] flex-center rounded-[10px]">
        <Image src={DonateIcon} alt="Donate" className="bg-primary size-6" />
      </div>
    </div>
  );
};

export default Sidebar;
