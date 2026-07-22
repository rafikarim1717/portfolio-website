import { MessageCircle } from "lucide-react";
import Container from "@/components/Container";

const HERO_DATA = {
  name: "Rafi",
  role: "Full-stack Web Developer",
  description:
    "I build web systems that actually work for your business. From scalable platforms to custom digital solutions, I focus on clean code and modern architecture using Next.js. My goal is simple: turning your complex problems into seamless, high-quality digital product.",
  cta: {
    mobileLabel: "WhatsApp",
    desktopLabel: "Message on WhatsApp",
    href: "https://wa.me/6287879206730?text=Hi%20Rafi,%20saya%20tertarik%20dengan%20layanan%20web%20development%20Anda.",
    icon: MessageCircle,
  },
  trustedBy: ["Genova", "Ikonoa", "Seven Retail", "Wisma 52"],
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "16+", label: "Projects" },
    { value: "23+", label: "Happy Clients" },
  ],
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-20"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for hire
          </div>

          {/* Title - Clean & Focus only on Name */}
          <h1 className="font-title font-bold text-3xl md:text-4xl lg:text-7xl text-[#333333] tracking-tight mb-3">
            Hi, I&apos;m{" "}
            <span className="text-[#4251EB]">{HERO_DATA.name}</span>
          </h1>

          {/* Badge Role */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#4251EB] text-xs md:text-sm font-bold uppercase tracking-widest mb-3 border border-blue-100">
            {HERO_DATA.role}
          </div>

          {/* Description */}
          <p className="font-body font-normal text-base  text-[#6c757d] leading-6 max-w-3xl mx-auto mb-4">
            {HERO_DATA.description}
          </p>

          {/* CTA Section - single, primary action */}
          <div className="flex items-center justify-center mb-4">
            <a
              href={HERO_DATA.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 font-body cursor-pointer font-medium inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-6 sm:px-8 text-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 whitespace-nowrap"
            >
              <HERO_DATA.cta.icon className="w-4 h-4" />
              <span className="sm:hidden">{HERO_DATA.cta.mobileLabel}</span>
              <span className="hidden sm:inline">
                {HERO_DATA.cta.desktopLabel}
              </span>
            </a>
          </div>

          {/* Trusted By - social proof without needing a headshot */}
          <div className="mb-4">
            <p className="font-body text-xs uppercase tracking-widest text-[#94a3b8] mb-2">
              Trusted by companies I&apos;ve built for
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {HERO_DATA.trustedBy.map((company) => (
                <span
                  key={company}
                  className="font-title font-semibold text-sm sm:text-base text-[#6c757d]/70"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="font-title font-semibold text-2xl text-[#4251EB] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-[10px] sm:text-xs md:text-sm text-[#6c757d] tracking-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
