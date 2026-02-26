import { ExternalLink, MessageCircle } from "lucide-react";
import Container from "@/components/Container";

const HERO_DATA = {
  name: "Rafi",
  role: "Full-stack Web Engineer",
  description:
    "Empowering brands with high-performance digital products. Specialized in engineering scalable business websites, high-converting e-commerce platforms, and complex custom web systems using Next.js and modern tech stacks. I don't just build sites; I build technical solutions that solve real business problems.",
  cta: {
    primary: { label: "Order Service", href: "#", icon: ExternalLink },
    secondary: {
      mobileLabel: "WhatsApp",
      desktopLabel: "Message on WhatsApp",
      href: "https://wa.me/6287879206730?text=Hi%20Rafi,%20saya%20tertarik%20dengan%20layanan%20web%20development%20Anda.",
      icon: MessageCircle,
    },
  },
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "24+", label: "Projects" },
    { value: "25+", label: "Happy Clients" },
  ],
};

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Title - Clean & Focus only on Name */}
          <h1 className="font-title font-bold text-3xl md:text-4xl lg:text-7xl text-[#333333] tracking-tight mb-8">
            Hi, I&apos;m{" "}
            <span className="text-[#4251EB]">{HERO_DATA.name}</span>
          </h1>

          {/* Badge Role */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#4251EB] text-xs md:text-sm font-bold uppercase tracking-widest mb-8 border border-blue-100">
            {HERO_DATA.role}
          </div>

          {/* Description */}
          <p className="font-body font-normal text-base  text-[#6c757d] leading-6 max-w-3xl mx-auto mb-10">
            {HERO_DATA.description}
          </p>

          {/* CTA Section */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
            <button className="h-10 focus:outline-none font-body cursor-pointer font-medium inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#4251EB] text-white shadow-lg px-4 py-2.5 text-sm sm:px-8 sm:py-3.5 transition-all hover:bg-blue-600 hover:shadow-xl whitespace-nowrap">
              <HERO_DATA.cta.primary.icon className="w-4 h-4" />
              {HERO_DATA.cta.primary.label}
            </button>

            <a
              href={HERO_DATA.cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              // Gue tambahin 'items-center' biar icon & text sejajar rapi
              className="h-10 font-body cursor-pointer font-medium inline-flex items-center justify-center gap-2 rounded-lg border border-[#4251EB] bg-white text-[#4251EB] px-4 py-2.5 text-sm sm:px-8 sm:py-3.5 transition-all hover:bg-blue-50 whitespace-nowrap"
            >
              <HERO_DATA.cta.secondary.icon className="w-4 h-4" />
              <span className="sm:hidden">
                {HERO_DATA.cta.secondary.mobileLabel}
              </span>
              <span className="hidden sm:inline">
                {HERO_DATA.cta.secondary.desktopLabel}
              </span>
            </a>
          </div>

          {/* Stats Section */}
          {/* <div className="max-w-2xl mx-auto pt-10">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="font-body font-semibold text-xl text-[#4251EB] leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-[10px] sm:text-xs md:text-sm text-[#6c757d] tracking-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
