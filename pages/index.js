import Head from "next/head";

// Components
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero/Hero";
import DedicationSection from "../components/Home/Dedication/DedicationSection";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import HighlightsSection from "../components/Home/HighlightsSection/HighlightsSection";
import Footer from "../components/Home/Footer/Footer";

const Home = () => {
  return (
    <section className="home">
      <Head>
        <title>Bauer RV Upholstery</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Hero />
      <DedicationSection />
      <CallToAction />
      <HighlightsSection />
      <Footer />
    </section>
  );
};

export default Home;
