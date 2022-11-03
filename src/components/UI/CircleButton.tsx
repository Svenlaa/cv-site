import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onClick: JSX.IntrinsicElements["button"]["onClick"];
  icon: IconDefinition;
};
const CircleButton = ({ onClick, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className="h-[50px] w-[50px] rounded-full bg-cover drop-shadow-lg after:absolute after:left-0 after:top-0 after:-z-10 after:h-[50px] after:w-[50px] after:rounded-full after:bg-black/10 after:duration-500 hover:after:scale-110"
    >
      <FontAwesomeIcon
        icon={icon}
        className="align-middle text-lg text-prime"
      />
    </button>
  );
};

export default CircleButton;
