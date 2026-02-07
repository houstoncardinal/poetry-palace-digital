import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PoetryShowcase from "@/components/PoetryShowcase";
import MantraBanner from "@/components/MantraBanner";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientParticles from "@/components/AmbientParticles";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <AmbientParticles />
      <Navigation />
      <Hero />
      <PoetryShowcase />
      <MantraBanner />
      <About />
      <SectionDivider variant="rose" />
      <Events />
      <SectionDivider variant="gold" />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
