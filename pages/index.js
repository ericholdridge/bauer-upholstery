import Head from "next/head";
import Hero from "../components/Hero/Hero";

// Components
import Navbar from "../components/Navbar/Navbar";

// Styles

const Home = () => {
  return (
    <section className="home">
      <Head>
        <title>Bauer RV Upholstery</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
