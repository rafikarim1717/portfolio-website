import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import FeaturedProjects from "@/components/FeaturedProject";
import ContactSection from "@/components/Contact";
import CtaCard from "@/components/CtaCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <TechnicalExpertise />
      <FeaturedProjects />
      <CtaCard />
      <ContactSection />
      <Footer />

      {/* Floating Elements */}
      <BackToTop />
    </main>
  );
}
