import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";

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
      <main>
        <p className="text-prime">v2.Svenlaa.com</p>
      </main>
    </>
  );
};

export default Home;
