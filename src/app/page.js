import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import FeaturedProjects from "@/components/FeaturedProject";
import CtaCard from "@/components/CtaCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <TechnicalExpertise />
      <FeaturedProjects />
      <CtaCard />
      <Footer />
    </main>
  );
}
