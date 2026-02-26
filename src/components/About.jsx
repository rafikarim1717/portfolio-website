import { LayoutTemplate, ShoppingCart, Settings } from "lucide-react";
import Container from "./Container";

const aboutIntro = {
  title: "About Me – Your Website Development Expert",
  paragraphs: [
    "Hi! I'm Rafi, a freelance Website Developer with over 4 years of experience. I specialize in creating AI-assisted websites and JavaScript-based custom solutions that are fast, scalable, and business-focused. I've delivered 24+ projects to clients worldwide.",
    "What sets me apart is my ability to combine modern web technologies with AI-driven workflows to build efficient systems, automation, and custom web solutions. I don’t just code — I create solutions that solve real business problems.",
  ],
};

const services = [
  {
    title: "Business Website",
    description:
      "Transform your brand with high-speed company profiles and landing pages. Optimized for conversion and built using AI-driven workflows for faster delivery without compromising quality.",
    icon: LayoutTemplate,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Scale your sales with a robust online store. From secure payment gateways to automated inventory management, I build shopping experiences that are reliable and user-friendly.",
    icon: ShoppingCart,
  },
  {
    title: "Custom Web Systems",
    description:
      "Solve specific operational headaches with tailor-made tools. Whether it's a booking system like Wisma 52, internal dashboards, or automated business workflows.",
    icon: Settings,
  },
  {
    title: "AI Integration",
    description:
      "Cutting-edge AI solutions integrated with WordPress including OpenAI API and custom AI workflows.",
    icon: Settings,
  },
  {
    title: "Fullstack Development",
    description:
      "Proficient in PHP, JavaScript, MySQL, and modern web technologies for complete WordPress solutions.",
    icon: Settings,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-600/5">
      <Container>
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-[#333] tracking-tight mb-6">
            {aboutIntro.title}
          </h2>

          <div className="max-w-3xl mx-auto text-body">
            {aboutIntro.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-base text-[#6c757d] font-body tracking-tight ${
                  index !== aboutIntro.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
          group relative flex flex-col gap-4 p-6 rounded-xl h-full border 
          bg-white/70 leading-5 border-slate-200 
          /* Efek Hover */
          hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 
          hover:-translate-y-1.5 transition-all duration-300 ease-out
          cursor-default
        "
              >
                <div className="flex gap-3 items-center">
                  <div className="flex-shrink-0">
                    {/* Box Icon - Warnanya berubah pas card di-hover karena class 'group-hover' */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-title font-semibold text-[17px] text-[#333333] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <div>
                  <p className="font-body font-normal text-[14px] text-[#6c757d] leading-5">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default About;
