import ExperienceCard, { type ExperienceProps } from "./ExerienceCard";

type Props = {
  items: ExperienceProps["item"][];
  title: string;
  tagline: string;
  id?: string;
};
const ExperienceSection = ({ items, title, tagline, id }: Props) => {
  return (
    <div className="flex flex-col py-[60px]" id={id}>
      <div className="mb-[20px] flex flex-col items-center justify-center">
        <span className="font-nav text-[14px] font-medium uppercase tracking-wider text-prime">
          {tagline}
        </span>
        <h2 className="font-nav text-[34px] font-bold md:text-[60px]">
          {title}
        </h2>
      </div>
      <div>
        {items.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
