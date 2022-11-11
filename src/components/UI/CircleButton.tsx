import clsx from "clsx";
import { type MouseEventHandler, type ReactNode } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon: ReactNode;
  className?: string;
};
const CircleButton = ({ onClick, icon, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "shadow-white-3 after:bg-pbright flex h-[50px] w-[50px] flex-row items-center justify-center rounded-full bg-gradient-to-br from-white0 to-white bg-cover align-middle text-lg text-prime after:absolute after:left-0 after:top-0 after:-z-10 after:h-[50px] after:w-[50px] after:rounded-full after:duration-500 hover:after:scale-110 dark:from-[#1e2024] dark:to-[#23272b] dark:shadow-dark1",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default CircleButton;
