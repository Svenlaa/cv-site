import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import CircleButton from "./UI/CircleButton";

const links = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "features",
    href: "#features",
  },
  {
    label: "portfolio",
    href: "#portfolio",
  },
  {
    label: "resume",
    href: "#resume",
  },
  {
    label: "testimonial",
    href: "#testimonial",
  },
  {
    label: "clients",
    href: "#clients",
  },
  {
    label: "pricing",
    href: "#pricing",
  },
  {
    label: "blog",
    href: "#blog",
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
          <CircleButton onClick={onClick} icon={faX} />
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
      <div className="mt-5 pt-5 text-[14px] font-medium uppercase">
        <span className="tracking-[2px]">On the internet</span>
      </div>
    </>
  );
};

export default SidebarContent;
