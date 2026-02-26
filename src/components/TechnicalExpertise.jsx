// components/sections/TechnicalExpertise.jsx
import Container from "./Container";

const expertiseGroups = [
  {
    title: "Core Technologies",
    color: "blue",
    items: ["JavaScript", "React & Next.js", "Tailwind CSS", "Golang"],
  },
  {
    title: "AI Development",
    color: "purple",
    items: [
      "OpenAI API Integration",
      "AI Content Generation",
      "Workflow Automation",
      "AI-Driven Rapid Prototyping",
    ],
  },
  {
    title: "Backend & Systems",
    color: "blue",
    items: [
      "Golang",
      "Database Modeling",
      "Auth & Security",
      "Scalable Architecture",
    ],
  },
  {
    title: "Development Tools",
    color: "purple",
    items: [
      "Git/GitHub",
      "REST APIs",
      "Database Design (Relational)",
      "Deployment & Debugging",
    ],
  },
];

const services = [
  {
    title: "Custom Plugin Development",
    description:
      "Bespoke WordPress plugins built from scratch with clean code and full documentation.",
  },
  {
    title: "AI Integration",
    description:
      "OpenAI API integration, content generation tools, and custom AI workflows.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure custom payment gateway integration for WooCommerce with multi-currency support.",
  },
];

export default function TechnicalExpertise() {
  return (
    <section aria-labelledby="technical-expertise-heading" className="py-20">
      <Container>
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="technical-expertise-heading"
            className="text-3xl font-title font-bold tracking-tight text-[#333] mb-4"
          >
            Technical Expertise
          </h2>
          <p className="text-base text-body text-[#6c757d] max-w-2xl mx-auto">
            Comprehensive WordPress development skills with modern tools and
            technologies that deliver exceptional results for every project.
          </p>
        </header>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {expertiseGroups.map((group) => {
            const colorClasses = "bg-blue-50 text-blue-600";

            return (
              <section
                key={group.title}
                className="bg-card/50 backdrop-blur-sm rounded-lg p-5 border border-slate-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 
    hover:-translate-y-1.5 transition-all duration-300 ease-out 
    cursor-default"
              >
                <h3 className="text-base font-title font-semibold text-[#333] mb-6 text-center text-left">
                  {group.title}
                </h3>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="
    bg-blue-50 text-blue-600 font-body px-4 py-2 rounded-lg text-xs text-center 
    border border-blue-100/50 transition-all duration-300 cursor-pointer
    /* Efek saat li ini di-hover langsung */
    hover:bg-blue-100 hover:border-blue-300
    /* Efek saat card (parent) di-hover (biar barengan) */
    group-hover:border-blue-200
  "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Specialized Services */}
        {/* <section
          className="mt-20 max-w-3xl mx-auto"
          aria-labelledby="specialized-services-heading"
        >
          <h3
            id="specialized-services-heading"
            className="text-2xl font-semibold text-slate-900 text-center mb-10"
          >
            Specialized Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-slate-200 rounded-xl p-4 text-center"
              >
                <h4 className="font-semibold text-[#333] mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section> */}
      </Container>
    </section>
  );
}
