import clsx from "clsx";
import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  href: string;
  label: ReactNode;
  title?: string;
  className?: string;
};
const HoverButton = ({ href, label, title, className }: Props) => (
  <Link href={href} className="group" title={title || undefined}>
    <span
      className={clsx(
        "flex flex-row items-center justify-center rounded-md bg-gradient-to-br from-white0 to-white text-xl text-text shadow-white3 transition-all duration-400 ease-in-out group-hover:translate-y-[-5px] group-hover:from-purple group-hover:to-red group-hover:text-white",
        className
      )}
    >
      {label}
    </span>
  </Link>
);

export default HoverButton;
