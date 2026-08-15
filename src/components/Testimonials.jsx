import { Quote } from "lucide-react";
import Container from "@/components/Container";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-[#333] tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="font-title font-normal text-base text-[#6c757d] max-w-2xl mx-auto">
            Real feedback from businesses I&apos;ve worked with — not just
            claims, but results they&apos;ve actually experienced.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                group flex flex-col gap-4 p-6 rounded-xl h-full border
                bg-white border-slate-200
                hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
                hover:-translate-y-1.5 transition-all duration-300 ease-out
                cursor-default
              "
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
                <Quote className="w-5 h-5" />
              </div>

              <p className="font-body text-sm text-[#333] leading-relaxed flex-grow">
                {testimonial.quote}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <p className="font-title font-semibold text-sm text-[#333]">
                  {testimonial.name}
                </p>
                <p className="font-body text-xs text-[#6c757d]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
