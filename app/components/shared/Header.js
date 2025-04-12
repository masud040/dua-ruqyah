import ToggleIcon from "@/public/assets/icons/toggle_icon.svg";
import User from "@/public/assets/images/user.png";
import Image from "next/image";
import SearchByDuaName from "../SearchByDuaName";
const Header = () => {
  return (
    <nav className="flex-center pb-[27px] w-[calc(100vw-210px)] gap-[30px] bg-secondary z-50 pt-[54px] fixed">
      <div className="w-[429px]">
        <h1 className="text-2xl font-semibold font-[--font-poppins]">
          Dua Page
        </h1>
      </div>
      {/* search by dua name */}
      <SearchByDuaName />
      {/* account informations*/}
      <div className="max-w-[330px] w-full flex-end">
        <div className=" flex-center gap-3">
          <Image src={User} alt="User" sizes="45" />
          <Image src={ToggleIcon} alt="Icon" className="w-3 h-[9px]" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
