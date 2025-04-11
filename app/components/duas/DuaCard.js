import AllahLogo from "@/public/assets/icons/allah_logo.svg";
import Bookmarks from "@/public/assets/icons/bookmarks.svg";
import Bulb from "@/public/assets/icons/bulb.svg";
import Copy from "@/public/assets/icons/copy.svg";
import Report from "@/public/assets/icons/report.svg";
import Share from "@/public/assets/icons/share.svg";
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

      <p className="text-[24px] leading-[71.33px]">
        لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
        وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
        مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
        ذَا الْجَدِّ مِنْكَ الْجَدُّ
      </p>
      <div className="flex-column gap-2.5">
        <p className="italic">
          <span className="font-semibold not-italic">Transliteration: </span>Laa
          ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu
          wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa
          a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka
          al-jaddu
        </p>
        <p>
          <span className="font-semibold">Translation: </span>
          There is none worthy of worship except Allah alone with no partner or
          associate. He is the Dominion and to Him be all praise, and He is able
          to do all things. O Allah, one can withhold what You have given and
          none can give what You have withheld, and no wealth or fortune can
          benefit anyone for from You comes all wealth and fortune.
        </p>
      </div>
      <div className="font-semibold">
        <p className="text-primary ">Reference:</p>
        <p>Surah Al-Fatir 35:15</p>
      </div>
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
