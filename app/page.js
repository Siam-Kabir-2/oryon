import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import WhyChoose from "./components/WhyChoose";
import Utility from "./components/Utility";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <WhyChoose />
        <Utility />
        <Community />
      </main>
      <Footer />
    </>
  );
}
