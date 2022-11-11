import Image from "next/image";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import Socials from "./Socials";
import CircleButton from "./UI/CircleButton";

export const links = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "mijn ervaring",
    href: "#ervaring",
  },
  {
    label: "opleiding",
    href: "#opleiding",
  },
  {
    label: "cv",
    href: "#cv",
  },
  {
    label: "projecten",
    href: "#projecten",
  },
  {
    label: "contact",
    href: "#contact",
  },
] as const;

type Props = {
  onClick: () => void;
};
const SidebarContent = ({ onClick }: Props) => {
  return (
    <>
      <div className="border-b-[1px] border-b-[#dce1e4] pb-[20px]">
        <div className="flex flex-row items-center justify-between">
          <Image
            src="/ProfilePic.jpg"
            width={70}
            height={70}
            className="rounded-full"
            alt="Svenlaa"
          />
          <CircleButton onClick={onClick} icon={<FiX />} />
        </div>
        <p className="mt-[20px] pr-[4%] text-base leading-8">
          Sven Lammertink is een Software developer voor webapplicaties.
        </p>
      </div>
      <nav>
        <ul className="mt-[20px] flex flex-col font-nav text-[14px] font-medium uppercase leading-[26.6px]">
          {links.map((link, i) => (
            <li key={i} className="my-2" onClick={onClick}>
              <Link href={link.href} className="block">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Socials />
    </>
  );
};

export default SidebarContent;
