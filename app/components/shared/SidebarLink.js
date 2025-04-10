import Image from "next/image";
import Link from "next/link";

const SidebarLink = ({ Icon, Name, Path }) => {
  return (
    <Link href={Path} className="rounded-full" title={Name}>
      <li className="p-[18px] rounded-full bg-tertiary">
        <Image src={Icon} alt={Name} className="size-5 bg-tertiary" />
      </li>
    </Link>
  );
};

export default SidebarLink;
