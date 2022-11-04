import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import CircleButton from "./UI/CircleButton";
import HoverButton from "./UI/HoverButton";

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
    label: "educatie",
    href: "#educatie",
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

const SocialLinks = [
  {
    label: faGithub,
    href: "https://github.com/Svenlaa",
    title: "Github",
  },
  {
    label: faLinkedinIn,
    href: "https://linkedin.com/in/Svenlaa",
    title: "Linkedin",
  },
  {
    label: faTwitter,
    href: "https://twitter.com/Svenlaa",
    title: "Twitter",
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
      <div className="mt-5 mb-5 pt-5 text-[14px] font-medium uppercase">
        <span className="tracking-[2px]">Elders op het internet</span>
      </div>
      <ul className="ml-[15px] flex flex-row gap-[15px]">
        {SocialLinks.map((link, i) => (
          <li key={i} className="my-[15px]">
            <HoverButton
              title={link.title}
              href={link.href}
              label={<FontAwesomeIcon icon={link.label} />}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarContent;
