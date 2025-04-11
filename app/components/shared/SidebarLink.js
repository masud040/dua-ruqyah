import Image from "next/image";
import Link from "next/link";

const SidebarLink = ({ Icon, Name, Path }) => {
  return (
    <Link href={Path} className="rounded-full" title={Name}>
      <li className="size-[38px] flex-center rounded-full bg-tertiary-300">
        <Image src={Icon} alt={Name} className="size-5 bg-tertiary-300" />
      </li>
    </Link>
  );
};

export default SidebarLink;
