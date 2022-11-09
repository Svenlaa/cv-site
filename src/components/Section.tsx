import { type ReactNode } from "react";
import Headline, { type HeadlineProps } from "./Headline";

type Props = {
  id?: string;
  children?: ReactNode;
};
const Section = ({ title, tagline, id, children }: Props & HeadlineProps) => (
  <section className="flex flex-col py-[60px]" id={id}>
    <Headline tagline={tagline} title={title} />
    <div>{children}</div>
  </section>
);

export default Section;
