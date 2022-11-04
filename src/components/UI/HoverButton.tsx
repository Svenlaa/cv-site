import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  href: string;
  label: ReactNode;
  title: string;
};
const HoverButton = ({ href, label, title }: Props) => {
  return (
    <Link href={href} className="group" title={title}>
      <span className="flex h-[53px] w-[53px] flex-row items-center justify-center rounded-md bg-gradient-to-br from-white0 to-white text-xl text-text shadow-white3 transition-all duration-400 ease-in-out group-hover:translate-y-[-5px] group-hover:from-purple group-hover:to-red group-hover:text-white">
        {label}
      </span>
    </Link>
  );
};

export default HoverButton;
