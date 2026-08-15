const WHATSAPP_HREF =
  "https://wa.me/6287879206730?text=Hi%20Rafi,%20saya%20tertarik%20dengan%20layanan%20web%20development%20Anda.";

const CtaCard = () => {
  return (
    <div className="text-card-foreground flex flex-col gap-6 rounded-2xl border bg-gradient-to-r from-blue-600/5 to-blue-500/10 border-blue-500/20 backdrop-blur-md max-w-3xl mx-auto w-full p-10 text-center shadow-lg shadow-blue-500/5">
      <div>
        <h3 className="text-lg text-[#333] mb-3 font-semibold font-title tracking-tight">
          Ready for Your Custom Solution?
        </h3>
        <p className="font-title font-normal text-[#6c757d] text-sm mb-8 max-w-lg mx-auto">
          Transform your business with high-performance systems and modern
          architecture. {"Let's"} build something exceptional together.
        </p>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2 whitespace-nowrap
            text-sm font-medium transition-all duration-300
            bg-[#4251EB] hover:bg-[#3845C8] hover:shadow-lg hover:shadow-[#4251EB]/30
            active:scale-95 h-10 rounded-lg px-6 text-white
            outline-none focus-visible:ring-2 focus-visible:ring-[#4251EB]/50
            cursor-pointer
          "
        >
          Start Your Project
        </a>
      </div>
    </div>
  );
};

export default CtaCard;
