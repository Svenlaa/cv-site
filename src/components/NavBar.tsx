import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SidebarContent, { links } from "./SidebarContent";
import CircleButton from "./UI/CircleButton";

const NavBar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggle = () => setNavIsOpen((curr) => !curr);

  return (
    <nav>
      <div
        className={clsx(
          navIsOpen ? "" : "invisible",
          "absolute z-50 flex h-full w-full flex-row bg-black/80 transition-all duration-200 ease-in-out"
        )}
      >
        <div
          className={clsx(
            navIsOpen ? "" : "-translate-x-full",
            "h-full w-[310px] bg-white  p-5 transition-all duration-500 dark:bg-dark-600 dark:text-text-dark"
          )}
        >
          <SidebarContent onClick={toggle} />
        </div>
        <div className="h-full flex-grow" onClick={toggle} />
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
          <CircleButton onClick={toggle} icon={<FiMenu />} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex h-full flex-row items-center justify-end gap-[10px] font-nav text-[13px]">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="mx-[5px] uppercase hover:text-prime"
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
