import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidebarContent, { links } from "./SidebarContent";
import CircleButton from "./UI/CircleButton";

const NavBar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav>
      <div
        className={
          (navIsOpen ? "" : "invisible") +
          " absolute z-50 flex h-full w-full flex-row bg-black/80 transition-all duration-200 ease-in-out"
        }
      >
        <div
          className={`${
            navIsOpen ? "" : "-translate-x-full"
          } h-full w-[310px]  bg-white p-5 transition-all duration-500`}
        >
          <SidebarContent onClick={() => setNavIsOpen((cur) => !cur)} />
        </div>
        <div
          className="h-full flex-grow"
          onClick={() => setNavIsOpen(!navIsOpen)}
        />
      </div>
      <div className="flex flex-row justify-between border-b-[1px] border-b-[#dce1e4] px-[15px] py-[14px] lg:px-[45px] lg:py-[14px]">
        {/* Left Part */}
        <div className="flex flex-row items-center">
          <Link href="/" className="relative aspect-[3/1] h-[45px] lg:h-[70px]">
            <Image alt="Svenlaa" src="/Brand.png" fill />
          </Link>
        </div>
        {/* Right Part */}
        <div className="flex flex-row items-center justify-end md:hidden">
          <CircleButton
            onClick={() => setNavIsOpen((cur) => !cur)}
            icon={faBars}
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex h-full flex-row items-center justify-end gap-[10px] font-nav text-[13px]">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className=" mx-[5px] uppercase hover:text-prime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
