export type HeadlineProps = { title: string; tagline: string };

const Headline = ({ tagline, title }: HeadlineProps) => (
  <div className="mb-[20px] flex flex-col items-center justify-center">
    <span className="font-nav text-[14px] font-medium uppercase tracking-wider text-prime">
      {tagline}
    </span>
    <h2 className="font-nav text-[34px] font-bold md:text-[60px]">{title}</h2>
  </div>
);

export default Headline;
