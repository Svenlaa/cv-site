import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { FiFile, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import HoverButton from "../components/UI/HoverButton";
import Image from "next/image";

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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>v2.Svenlaa.com</title>
        <meta
          name="description"
          content="De tweede generatie van Svenlaa.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="flex flex-col gap-[15px] p-[15px]">
        <div className="grid grid-flow-col grid-cols-1 grid-rows-3">
          <div className="group mb-[36px]">
            <section className="w-full rounded-[10px] bg-gradient-to-br from-white0 to-white p-[25px] pt-[41px] shadow-white3 duration-400 group-hover:translate-y-[-5px]">
              <div className="mb-[30px]">
                <div className="relative mb-[20px] flex h-[40px] w-[40px] flex-row items-center justify-center rounded-full bg-prime/70 after:absolute after:h-[60px] after:w-[60px] after:rounded-full after:bg-prime/20 ">
                  <FiUser className="trans top-0 left-0 z-10 aspect-square items-center text-[22px] text-white" />
                </div>
                <h2 className="mb-[11px] font-nav text-[32px] font-bold leading-[40px]">
                  Hey, ik ben <span className="text-prime">Sven</span>
                </h2>
                <p className="text-[16px] leading-6">
                  Eén van de beste, snelst lerende, software developer die je
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
          <section className="mt-[10px] h-fit rounded-[10px] bg-gradient-to-br from-white0 to-white p-[25px] px-[20px] pt-[10px] pb-[15px] shadow-white3">
            <div className="p-[10px]">
              <span className="mb-[20px]">Download mijn CV</span>
              <div className="flex flex-row flex-wrap">
                <HoverButton
                  className="m-[7px] w-fit whitespace-nowrap py-[15px] px-[35px] font-nav !text-[14px] font-medium uppercase !text-prime group-hover:!text-white"
                  label="Download CV"
                  href="./yes"
                />
                <HoverButton
                  className="m-[7px] w-fit whitespace-nowrap py-[15px] px-[35px] font-nav !text-[14px] font-medium uppercase !text-prime group-hover:!text-white"
                  label="Neem contact op"
                  href="#contact"
                />
              </div>
            </div>
          </section>
          <section className="rounded-[10px] bg-gradient-to-br from-white0 to-white p-[15px] shadow-white3">
            <div className="relative z-10 aspect-[1.333] w-full overflow-hidden rounded-md">
              <Image
                src="/NewPic.jpg"
                fill
                alt="Sven Lammertink achter een beelscherm"
                className="absolute z-0 transition-all duration-400 ease-in-out hover:scale-110"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
