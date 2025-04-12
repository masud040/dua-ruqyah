import AllahLogo from "@/public/assets/icons/allah_logo.svg";
import Bookmarks from "@/public/assets/icons/bookmarks.svg";
import Bulb from "@/public/assets/icons/bulb.svg";
import Copy from "@/public/assets/icons/copy.svg";
import Report from "@/public/assets/icons/report.svg";
import Share from "@/public/assets/icons/share.svg";
import Image from "next/image";
const DuaCard = ({ dua }) => {
  return (
    <div className="bg-white rounded-[10px] border-[0.5px] border-quaternary px-[30px] py-[15px] flex-column gap-7">
      <div className="flex-start gap-2.5">
        <Image src={AllahLogo} sizes="35" alt="Allah Logo" />
        <p className="text-primary font-semibold">
          {dua?.index + 1}. {dua?.dua_name_en}
        </p>
      </div>

      {dua?.top_en && <p className="text-justify">{dua?.top_en}</p>}

      {dua?.dua_arabic && (
        <p className="text-[24px] leading-[71.33px]">{dua?.dua_arabic}</p>
      )}
      {dua?.dua_arabic && (
        <div className="flex-column gap-2.5">
          <p className="italic">
            <span className="font-semibold not-italic">Transliteration: </span>
            {dua.transliteration_en}
          </p>
          <p>
            <span className="font-semibold">Translation: </span>
            {dua.translation_en}
          </p>
        </div>
      )}
      {dua?.bottom_en && <p className="text-justify">{dua?.bottom_en}</p>}

      {dua?.refference_en && (
        <div className="font-semibold">
          <p className="text-primary ">Reference:</p>
          <p>{dua?.refference_en}</p>
        </div>
      )}

      <div className="pb-2.5 flex-end gap-[39px]">
        <Image src={Copy} alt="Copy" sizes="24" />
        <Image src={Bookmarks} alt="Bookmarks" sizes="24" />
        <Image src={Bulb} alt="Bulb" sizes="24" />
        <Image src={Share} alt="Share" sizes="24" />
        <Image src={Report} alt="Report" sizes="24" />
      </div>
    </div>
  );
};

export default DuaCard;
