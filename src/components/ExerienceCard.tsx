export type ExperienceProps = {
  item: {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    companyUrl?: string;
    details?: string;
    image: string;
    imageAlt?: string;
  };
};

const ExperienceCard = ({ item }: ExperienceProps) => {
  return <p>{JSON.stringify(item)}</p>;
};

// {item.startDate === item.endDate ? item.startDate : `${item.startDate} - ${item.endDate || "Heden"}`}

export default ExperienceCard;
