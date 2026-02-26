// components/CtaCard.jsx
import React from "react";

const CtaCard = () => {
  return (
    <div className="p-4">
      <div className="mt-10 text-card-foreground flex flex-col gap-6 rounded-2xl border bg-gradient-to-r from-blue-600/5 to-blue-500/10 border-blue-500/20 backdrop-blur-md max-w-3xl mx-auto p-10 text-center shadow-lg shadow-blue-500/5">
        <div>
          <h3 className="text-lg text-[#333] mb-3 font-semibold font-title tracking-tight">
            Ready for Your Custom Solution?
          </h3>
          <p className="font-body text-[#6c757d] text-sm mb-8 max-w-lg mx-auto">
            Transform your business with high-performance systems and modern
            architecture. {"Let's"} build something exceptional together.
          </p>

          <button
            className="
          inline-flex items-center justify-center gap-2 whitespace-nowrap 
          text-sm font-medium transition-all duration-300
          bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 
          active:scale-95 h-10 rounded-lg px-6 text-white 
          outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 
          cursor-pointer
        "
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
