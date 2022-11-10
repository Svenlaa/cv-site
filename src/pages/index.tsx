import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { FiFile, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import HoverButton from "../components/UI/HoverButton";
import Image from "next/image";
import ExperienceCard, {
  type ExperienceProps,
} from "../components/ExerienceCard";
import Line from "../components/UI/Line";
import Section from "../components/Section";
import Form from "../components/Form/Form";

const entries = [
  {
    Icon: FiFile,
    label: "Web Developer",
  },
  {
    Icon: FiMail,
    label: "sven.lammertink@hotmail.com",
  },
  {
    Icon: FiMapPin,
    label: "Nijverdal, Nederland",
  },
] as const;

const workExperience: ExperienceProps["item"][] = [
  {
    startDate: "2022",
    endDate: "",
    company: "TradeRealm",
    image: "/companies/TradeRealm.jpg",
    imageAlt: "Voorkant van het TradeRealm kantoor",
    title: "Junior Software Developer",
    details: "Aan projecten gewerkt met TypeScript en React",
  },
  {
    startDate: "2017",
    endDate: "2019",
    company: "Coop Leon Haanstra",
    image: "/companies/Coop.jpg",
    title: "Vakkenvuller",
  },
];

const educationExperience: ExperienceProps["item"][] = [
  {
    company: "EEGA",
    startDate: "2021",
    endDate: "",
    title: "Leer-werktraject",
    image: "/companies/eega.jpg",
  },
  {
    company: "Reggesteyn",
    startDate: "2015",
    endDate: "2020",
    title: "Havo NG, NT",
    details: "Profielen 3 & 4, niet afgerond",
    image: "/companies/Reggesteyn.jpg",
  },
];

const Home: NextPage = () => (
  <>
    <Head>
      <title>v2.Svenlaa.com</title>
      <meta name="description" content="De tweede generatie van Svenlaa.com" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavBar />
    <main className="mx-auto flex max-w-screen-xl flex-col gap-[15px] p-[15px]">
      {/* Above the fold */}
      <div
        className="flex h-fit grid-flow-col flex-col gap-[10px] pb-[60px] md:grid md:grid-cols-[2fr,_3fr] md:grid-rows-[2fr,_1fr] md:gap-[20px] md:pt-[75px]"
        id="home"
      >
        <div className="group h-full" id="home">
          <section className="w-full rounded-[10px] bg-gradient-to-br from-white0 to-white p-[25px] pt-[41px] shadow-white3 duration-400 group-hover:translate-y-[-5px]">
            <div className="mb-[30px]">
              <div className="relative mb-[20px] flex h-[40px] w-[40px] flex-row items-center justify-center rounded-full bg-prime/70 after:absolute after:h-[60px] after:w-[60px] after:rounded-full after:bg-prime/20 ">
                <FiUser className="trans top-0 left-0 z-10 aspect-square items-center text-[22px] text-white" />
              </div>
              <h2 className="mb-[11px] font-nav text-[32px] font-bold leading-[40px] lg:text-[52px] lg:leading-[62px]">
                Ik ben <span className="text-prime">Sven</span>
              </h2>
              <p className="text-[16px] leading-6">
                Eén van de beste, snelst lerende, software developers die je
                ooit zal ontmoeten.
              </p>
            </div>
            <div className="mb-[13px] flex flex-col gap-[13px]">
              {entries.map((entry, i) => (
                <span key={i} className="leading-[30px]">
                  <entry.Icon className="mr-[10px] inline-block aspect-square text-[24px] text-prime" />
                  {entry.label}
                </span>
              ))}
            </div>
          </section>
        </div>
        <section className="my-[10px] h-min rounded-[10px] bg-gradient-to-br from-white0 to-white px-[20px] py-[15px] shadow-white3">
          <div className="p-[10px]">
            <span className="mb-[20px]">Download mijn CV</span>
            <div className="flex flex-row flex-wrap">
              <HoverButton
                className="m-[7px] w-fit whitespace-nowrap py-[15px] px-[35px] font-nav !text-[14px] font-medium uppercase !text-prime group-hover:!text-white"
                label="Download CV"
                href="./CV_button"
              />
              <HoverButton
                className="m-[7px] w-fit whitespace-nowrap py-[15px] px-[35px] font-nav !text-[14px] font-medium uppercase !text-prime group-hover:!text-white"
                label="Contact"
                href="#contact"
              />
            </div>
          </div>
        </section>
        <section className="col-start-2 row-span-2 h-min rounded-[10px] bg-gradient-to-br from-white0 to-white p-[15px] shadow-white3 md:p-[30px]">
          <div className="relative z-10 aspect-[1.333] w-full overflow-hidden rounded-md">
            <Image
              src="/NewPic.jpg"
              priority
              fill
              alt="Sven Lammertink achter een beelscherm"
              className="absolute z-0 transition-all duration-400 ease-in-out hover:scale-110"
            />
          </div>
        </section>
      </div>

      <Line />
      {/* Werkervaring */}
      <Section
        id="ervaring"
        title="Werkervaring"
        tagline="Meer dan 3 jaar aan het werk"
      >
        {workExperience.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </Section>

      <Line />
      {/* Opleiding */}
      <Section id="opleiding" title="Opleiding" tagline="Leer je ook wat">
        {educationExperience.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </Section>

      <Line />
      {/* Contact */}
      <Section id="contact" title="Contact" tagline="Heb je een vraag?">
        <div className="flex flex-col flex-wrap">
          <Form />
        </div>
      </Section>
    </main>
  </>
);

export default Home;
