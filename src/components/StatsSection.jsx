import React from "react";
import { Briefcase, Users, Calendar } from "lucide-react";
import Container from "./Container";

const stats = [
  {
    id: 1,
    label: "Projects Completed",
    value: "24+",
    icon: Briefcase,
    color: "text-primary",
    bg: "bg-tint",
  },
  {
    id: 2,
    label: "Happy Clients",
    value: "25+",
    icon: Users,
    color: "text-primary",
    bg: "bg-tint",
  },
  {
    id: 3,
    label: "Years Experience",
    value: "4+",
    icon: Calendar,
    color: "text-primary",
    bg: "bg-tint",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="
                  group min-w-0 p-6 rounded-xl bg-white border border-slate-200 
                  /* Efek Hover Mewah */
                  hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                  hover:-translate-y-1.5 transition-all duration-300 ease-out 
                  cursor-default flex items-center
                "
            >
              {/* Icon Container */}
              {/* <div
                className={`p-4 rounded-xl ${stat.bg} ${stat.color} mr-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-3`}
              >
                <stat.icon className="w-6 h-6" />
              </div> */}

              {/* Text Content */}
              <div>
                <p className="text-2xl font-bold text-ink font-title tracking-tight mb-0.5">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-muted font-body uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
