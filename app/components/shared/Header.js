import ToggleIcon from "@/public/assets/icons/toggle_icon.svg";
import User from "@/public/assets/images/user.png";
import Image from "next/image";
import SearchByDuaName from "../SearchByDuaName";
const Header = () => {
  return (
    <nav className="flex-center gap-[30px] mt-[22px] w-full">
      <div className="w-[429px] flex">
        <h1 className="text-2xl font-semibold font-popins">Dua Page</h1>
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
