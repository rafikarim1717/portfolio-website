import React from "react";
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react";
import Container from "./Container";

const contactData = [
  {
    id: 1,
    title: "Location",
    value: "Available Globally",
    description: "Available for remote work worldwide",
    icon: MapPin,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 2,
    title: "Email",
    value: "rafikarim@yahoo.com", // Ganti email lo Jon
    description: "Response within 24 hours",
    icon: Mail,
    color: "text-blue-600",
    bg: "bg-blue-50",
    link: "mailto:rafikarim@yahoo.com",
  },
  {
    id: 3,
    title: "WhatsApp",
    value: "+62 812 XXXX XXXX", // Ganti nomor WA lo
    description: "Quick messaging and calls",
    icon: MessageSquare,
    color: "text-blue-600",
    bg: "bg-blue-50",
    link: "https://wa.me/62812XXXXXXXX",
  },
  {
    id: 4,
    title: "Availability",
    value: "24/7 Support Available",
    description: "Flexible hours for international clients",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-3xl text-[#333] font-bold tracking-tight mb-2">
            Get in Touch
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactData.map((item) => {
            const Wrapper = item.link ? "a" : "div";
            return (
              <Wrapper
                key={item.id}
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                className="
                  group flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-200 
                  hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 
                  hover:-translate-y-1.5 transition-all duration-300 ease-out 
                  cursor-default no-underline
                "
              >
                {/* Icon Container */}
                <div className={`${item.bg} ${item.color} p-4 rounded-xl`}>
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {item.title}
                  </span>
                  <h4 className="font-body text-lg font-semibold text-[#333] mb-1">
                    {item.value}
                  </h4>
                  <p className="text-sm text-[#6c757d] font-body">
                    {item.description}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
