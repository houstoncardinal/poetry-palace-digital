import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PoetryShowcase from "@/components/PoetryShowcase";
import About from "@/components/About";
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
      <About />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
