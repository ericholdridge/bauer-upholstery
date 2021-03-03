import Head from "next/head";

// Components
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero/Hero"
import Dedication from "../components/Home/Dedication/Dedication";

const Home = () => {
  return (
    <section className="home">
      <Head>
        <title>Bauer RV Upholstery</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Hero />
      <Dedication />
    </section>
  );
};

export default Home;
