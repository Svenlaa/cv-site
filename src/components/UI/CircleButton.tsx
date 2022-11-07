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
        "flex h-[50px] w-[50px] flex-row items-center justify-center rounded-full bg-gradient-to-br from-white0 to-white bg-cover align-middle text-lg text-prime shadow-white3 after:absolute after:left-0 after:top-0 after:-z-10 after:h-[50px] after:w-[50px] after:rounded-full after:bg-pbright after:duration-500 hover:after:scale-110",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default CircleButton;
