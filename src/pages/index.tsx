import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { FiFile, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import HoverButton from "../components/UI/HoverButton";
import Image from "next/image";
import ExperienceCard, {
  type ExperienceProps,
} from "../components/ExerienceCard";

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
    company: "TradeRealm",
    endDate: "2022",
    startDate: "2022",
    title: "Junior Software Developer",
    image: "/companies/TradeRealm.jpg",
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
      <div className="flex h-fit grid-flow-col flex-col gap-[10px] md:grid md:grid-cols-[2fr,_3fr] md:grid-rows-[2fr,_1fr] md:gap-[20px] md:pt-[75px] md:pb-[62px]">
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
        <section className="col-start-2 row-span-2 h-min rounded-[10px] bg-gradient-to-br from-white0 to-white p-[15px] shadow-white3">
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
      <div className="py-20">
        <span className="mx-auto block border-t border-solid border-text/20"></span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <span className="font-nav text-[14px] font-medium uppercase tracking-wider text-prime ">
            Meer dan 3 jaar aan het werk
          </span>
          <h2 className="font-nav text-[34px] font-bold">Werkervaring</h2>
        </div>
        <div>
          {workExperience.map((item, i) => (
            <ExperienceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Home;
