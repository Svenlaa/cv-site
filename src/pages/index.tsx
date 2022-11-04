import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { FiFile, FiMail, FiMapPin } from "react-icons/fi";

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
        <div className="grid grid-cols-1">
          <div className="group">
            <div className="w-full rounded-[10px] bg-gradient-to-br from-white0 to-white p-[25px] pt-[41px] shadow-white3 duration-400 group-hover:translate-y-[-5px]">
              <div className="mb-[30px]">
                <h2 className="mb-[11px] font-nav text-[32px] font-bold leading-[40px]">
                  Hey, ik ben <span className="text-prime">Sven</span>
                </h2>
                <p className="text-[16px] leading-6">
                  Eén van de beste, snelst lerende, software developer die je
                  ooit zal ontmoeten.
                </p>
              </div>
              <div className="flex flex-col gap-[13px]">
                <span className="leading-[30px]">
                  <FiFile className="mr-[10px] inline-block aspect-square text-xl text-prime" />
                  Web Developer
                </span>
                <span className="leading-[30px]">
                  <FiMail className="mr-[10px] inline-block aspect-square text-xl text-prime" />
                  sven.lammertink@hotmail.com
                </span>
                <span className="leading-[30px]">
                  <FiMapPin className="mr-[10px] inline-block aspect-square text-xl text-prime" />
                  Nijverdal, Nederland
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
