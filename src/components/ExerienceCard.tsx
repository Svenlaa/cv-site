import Image from "next/image";

export type ExperienceProps = {
  item: {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    details?: string;
    image: string;
    imageAlt?: string;
  };
};

const ExperienceCard = ({ item }: ExperienceProps) => (
  <div className="mx-[10px] mt-[40px] flex flex-col gap-[25px] rounded-[10px] bg-gradient-to-br from-white0 to-white p-[20px] shadow-white3 md:flex-row">
    <div className="relative aspect-[1.5] w-full overflow-hidden rounded-md md:aspect-[1.9] md:h-[170px] md:w-auto">
      <Image
        src={item.image}
        alt={item.imageAlt || item.company + " Afbeelding"}
        className="absolute object-cover transition-transform duration-400 ease-in-out hover:scale-105"
        fill
      />
    </div>
    <div className="flex flex-col gap-[10px] md:w-full">
      <span className="h-fit w-fit rounded-full bg-prime px-[8px] py-[2px] text-[14px] text-white">
        {item.startDate === item.endDate
          ? item.startDate
          : `${item.startDate} - ${item.endDate || "Heden"}`}
      </span>
      <h4 className="mt-2 text-[22px] leading-5 md:h-full md:text-[26px]">
        {item.title}
      </h4>
      <h6 className="font-nav text-[16px] leading-6 md:h-full md:text-[20px]">
        {item.company}
      </h6>
      <p className="md:h-full">{item.details || ""}</p>
    </div>
  </div>
);

export default ExperienceCard;
