import AllahLogo from "@/public/assets/icons/allah_logo.svg";
import Image from "next/image";
const DuaCard = () => {
  return (
    <div className="bg-white rounded-[10px] border-[0.5px] border-quaternary px-[30px] py-[15px] flex-column gap-7">
      <div className="flex-start gap-2.5">
        <Image src={AllahLogo} sizes="35" alt="Allah Logo" />
        <p className="text-primary font-semibold">
          1. The servant is dependent on his Lord
        </p>
      </div>
      <p className="text-justify">
        All human beings depend on Allah for their welfare and prevention of
        evil in various matters of their religion and world. Allah says
        (interpretation of the meaning): O mankind, you are those in need of
        Allah, while Allah is the Free of need, the Praiseworthy.
      </p>

      <div className="font-semibold">
        <p className="text-primary ">Reference:</p>
        <p>Surah Al-Fatir 35:15</p>
      </div>
    </div>
  );
};

export default DuaCard;
