import { MessageCircle } from "lucide-react";
import Container from "@/components/Container";

const HERO_DATA = {
  role: "Software Engineer",
  description:
    "I work directly with business owners to design and build systems, from custom dashboards to AI-integrated platforms, using modern architecture built to solve real operational problems, not just decorate a homepage.",
  cta: {
    mobileLabel: "WhatsApp",
    desktopLabel: "Message on WhatsApp",
    href: "https://wa.me/6287879206730?text=Hi%20Rafi,%20saya%20tertarik%20dengan%20layanan%20web%20development%20Anda.",
    icon: MessageCircle,
  },
  trustedBy: [
    { name: "Genova", src: "/logo/logo-genova.jpg" },
    { name: "Ikonoa", src: "/logo/logo-ikonoa.jpg" },
    { name: "Seven Retail", src: "/logo/logo-seven-new-last.svg" },
    { name: "Wisma 52", src: "/logo/logo-wisma-52.png" },
    {
      name: "PT Multi Sarana Pelindung",
      src: "/logo/logo-multi-sarana-pelindung.webp",
    },
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
         
           {/* Badge Role */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 border border-blue-100">
            {HERO_DATA.role}
          </div>

          {/* Title - Value proposition, not a generic greeting */}
          <h1 className="font-title font-bold text-3xl md:text-4xl lg:text-6xl text-[#333333] tracking-tight mb-4">
            I Build What Your Business{" "}
            <span className="text-blue-600">Actually Needs</span>
          </h1>

        

          {/* Description */}
          <p className="font-title font-normal text-base  text-[#6c757d] leading-6 max-w-3xl mx-auto mb-8">
            {HERO_DATA.description}
          </p>

          {/* CTA Section - single, primary action */}
          <div className="flex items-center justify-center mb-14">
            <a
              href={HERO_DATA.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 font-body cursor-pointer font-medium inline-flex items-center justify-center gap-2 rounded-full bg-[#4251EB] text-white px-7 sm:px-9 text-sm shadow-md shadow-[#4251EB]/20 transition-all duration-300 hover:bg-[#3845C8] hover:shadow-lg hover:shadow-[#4251EB]/30 active:scale-95 whitespace-nowrap"
            >
              <HERO_DATA.cta.icon className="w-4 h-4" />
              <span className="sm:hidden">{HERO_DATA.cta.mobileLabel}</span>
              <span className="hidden sm:inline">
                {HERO_DATA.cta.desktopLabel}
              </span>
            </a>
          </div>

          {/* Trusted By - social proof without needing a headshot */}
          {/* Temporarily hidden
          <div className="w-full overflow-hidden px-6 sm:px-10">
            <div className="flex w-max animate-marquee items-center gap-16 sm:gap-20">
              {[...HERO_DATA.trustedBy, ...HERO_DATA.trustedBy].map(
                (company, idx) => (
                  <div
                    key={`${company.name}-${idx}`}
                    className="relative h-10 sm:h-12 lg:h-14 w-28 sm:w-32 lg:w-36 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      src={company.src}
                      alt={company.name}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 144px, (min-width: 640px) 128px, 112px"
                    />
                  </div>
                )
              )}
            </div>
          </div>
          */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
