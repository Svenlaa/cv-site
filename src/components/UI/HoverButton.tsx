import clsx from "clsx";
import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  href: string;
  label: ReactNode;
  title?: string;
  className?: string;
  target?: string;
};
const HoverButton = ({ href, label, title, className, target }: Props) => (
  <Link
    href={href}
    target={target}
    className="group"
    title={title || undefined}
  >
    <span
      className={clsx(
        "shadow-white-3 flex flex-row items-center justify-center rounded-md bg-gradient-to-br from-white0 to-white text-xl text-text transition-all duration-400 ease-in-out group-hover:translate-y-[-5px] group-hover:from-purple group-hover:to-red group-hover:text-white dark:from-dark0 dark:to-dark1 dark:text-text-dark dark:shadow-dark1",
        className
      )}
    >
      {label}
    </span>
  </Link>
);

export default HoverButton;
