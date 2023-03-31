import { FiGithub, FiGitlab, FiLinkedin } from "react-icons/fi";
import HoverButton from "./UI/HoverButton";

const SocialLinks = [
  {
    label: <FiGithub />,
    href: "https://github.com/Svenlaa",
    title: "Github",
  },
  {
    label: <FiGitlab />,
    href: "https://gitlab.com/Svenlaa",
    title: "Gitlab",
  },
  {
    label: <FiLinkedin />,
    href: "https://linkedin.com/in/Svenlaa",
    title: "Linkedin",
  },
] as const;

const Socials = () => {
  return (
    <>
      <div className="mb-5 mt-5 pt-5 text-[14px] font-medium uppercase">
        <span className="tracking-[2px]">Elders op het internet</span>
      </div>
      <ul className="ml-[15px] flex flex-row gap-[15px]">
        {SocialLinks.map((link, i) => (
          <li key={i} className="my-[15px]">
            <HoverButton
              className="h-[53px] w-[53px]"
              title={link.title}
              href={link.href}
              label={link.label}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Socials;
