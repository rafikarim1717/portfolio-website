"use client";

import {
  LayoutTemplate,
  ShoppingCart,
  Settings,
  Check,
  Globe,
  Wrench,
} from "lucide-react";
import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const WA_BASE = "https://wa.me/6287879206730?text=";

const SECTION_TEXT = {
  id: {
    heading: "Paket & Harga",
    subheading: "Harga jelas, scope jelas dari awal. Nggak ada biaya kejutan.",
    from: "mulai dari",
    price: "harga",
    revision: "Revisi",
    done: "Selesai",
    badge: "Paling dicari",
    note: "Belum yakin paket mana yang cocok? Konsultasi dulu, gratis.",
  },
  en: {
    heading: "Packages & Pricing",
    subheading: "Clear pricing, clear scope from day one. No surprise costs.",
    from: "starting from",
    price: "price",
    revision: "Revisions",
    done: "Done in",
    badge: "Most requested",
    note: "Not sure which package fits? Let's talk first, it's free.",
  },
};

const packages = [
  {
    key: "landing",
    icon: LayoutTemplate,
    title: { id: "Landing Page / Company Profile", en: "Landing Page / Company Profile" },
    forWho: {
      id: "Buat bisnis yang mau kelihatan profesional & gampang dihubungi.",
      en: "For businesses that want to look professional and be easy to reach.",
    },
    price: { id: "Rp3 juta", en: "IDR 3M" },
    features: {
      id: [
        "1–3 halaman (beranda, layanan, kontak)",
        "Desain custom sesuai brand lo",
        "Tombol WhatsApp & Google Maps",
        "Rapi di HP & laptop",
        "SEO dasar biar ketemu di Google",
      ],
      en: [
        "1–3 pages (home, services, contact)",
        "Custom design that fits your brand",
        "WhatsApp button & Google Maps",
        "Looks great on mobile & desktop",
        "Basic SEO so you show up on Google",
      ],
    },
    meta: { revision: "2x", done: { id: "±7 hari", en: "~7 days" } },
    cta: { id: "Pilih paket ini", en: "Choose this package" },
    waText: "Halo Rafi, gue tertarik paket Landing Page / Company Profile.",
  },
  {
    key: "store",
    icon: ShoppingCart,
    featured: true,
    title: { id: "Toko Online", en: "Online Store" },
    forWho: {
      id: "Buat brand yang capek balesin DM “kak harga berapa?” satu-satu.",
      en: "For brands tired of answering “how much is this?” DMs one by one.",
    },
    price: { id: "Rp7 juta", en: "IDR 7M" },
    features: {
      id: [
        "Semua yang ada di paket Landing Page",
        "Katalog produk + varian (ukuran, warna)",
        "Keranjang & checkout tanpa harus chat",
        "Bayar online: transfer, e-wallet, QRIS",
        "Dashboard admin: produk & pesanan",
        "Gue bantu pindahin katalog lo (Excel/Shopee)",
      ],
      en: [
        "Everything in the Landing Page package",
        "Product catalog + variants (size, color)",
        "Cart & checkout, no chat needed",
        "Online payment: transfer, e-wallet, QRIS",
        "Admin dashboard: products & orders",
        "I'll help migrate your catalog (Excel/Shopee)",
      ],
    },
    meta: { revision: "2x", done: { id: "±3–4 minggu", en: "~3–4 weeks" } },
    cta: { id: "Pilih paket ini", en: "Choose this package" },
    waText: "Halo Rafi, gue tertarik paket Toko Online.",
  },
  {
    key: "custom",
    icon: Settings,
    title: { id: "Sistem Custom", en: "Custom System" },
    forWho: {
      id: "Buat bisnis dengan alur kerja khusus yang nggak ada template-nya.",
      en: "For businesses with unique workflows no template can handle.",
    },
    price: { id: "Sesuai kebutuhan", en: "Based on scope" },
    custom: true,
    features: {
      id: [
        "Booking & riwayat treatment pasien",
        "Manajemen stok & pesanan",
        "Sistem internal / dashboard",
        "Konsultasi gratis dulu",
      ],
      en: [
        "Booking & patient treatment history",
        "Inventory & order management",
        "Internal systems / dashboards",
        "Free consultation first",
      ],
    },
    meta: { scope: { id: "Scope dibahas bareng", en: "Scope discussed together" } },
    cta: { id: "Konsultasi gratis", en: "Free consultation" },
    waText: "Halo Rafi, gue mau konsultasi soal sistem custom.",
  },
];

const addons = [
  {
    icon: Globe,
    title: { id: "Domain & Hosting", en: "Domain & Hosting" },
    description: {
      id: "Dibayar terpisah per tahun. Gue bantu pilih yang pas & setup sampai online.",
      en: "Billed separately per year. I'll help you pick the right one and set it up.",
    },
  },
  {
    icon: Wrench,
    title: {
      id: "Maintenance · mulai Rp300rb/bulan",
      en: "Maintenance · from IDR 300K/month",
    },
    description: {
      id: "Update konten, perbaikan kecil, dan backup rutin. Opsional.",
      en: "Content updates, small fixes, and regular backups. Optional.",
    },
  },
];

const waHref = (text) => `${WA_BASE}${encodeURIComponent(text)}`;

const Pricing = () => {
  const { lang } = useLanguage();
  const t = SECTION_TEXT[lang];

  return (
    <section id="pricing" className="py-20 bg-surface-soft">
      <Container>
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-ink tracking-tight mb-4">
            {t.heading}
          </h2>
          <p className="font-title font-normal text-base lg:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Package cards — featured card comes first on mobile, center on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const featured = pkg.featured;

            return (
              <div
                key={pkg.key}
                className={`
                  relative flex flex-col p-7 lg:p-8 rounded-2xl h-full bg-white
                  transition-all duration-300 ease-out
                  ${
                    featured
                      ? "order-first lg:order-none md:col-span-2 lg:col-span-1 border-2 border-primary shadow-xl shadow-primary/15 lg:-translate-y-2"
                      : "border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5"
                  }
                `}
              >
                {featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    {t.badge}
                  </span>
                )}

                <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center text-primary mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-title font-bold text-xl text-ink mb-2">
                  {pkg.title[lang]}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-6 lg:min-h-[44px]">
                  {pkg.forWho[lang]}
                </p>

                <span className="font-body text-[13px] font-medium text-muted">
                  {pkg.custom ? t.price : t.from}
                </span>
                <p
                  className={`font-title font-extrabold tracking-tight text-ink mt-0.5 mb-6 ${
                    pkg.custom ? "text-2xl lg:text-[28px]" : "text-3xl lg:text-[34px]"
                  }`}
                >
                  {pkg.price[lang]}
                </p>

                <div className="border-t border-line mb-6" />

                <ul className="flex flex-col gap-3 mb-7 flex-1">
                  {pkg.features[lang].map((feature) => (
                    <li key={feature} className="flex gap-2.5 font-body text-[15px] text-ink leading-snug">
                      <Check className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-x-4 gap-y-1 font-body text-[13px] text-muted mb-6">
                  {pkg.meta.scope ? (
                    <span className="font-semibold text-ink">{pkg.meta.scope[lang]}</span>
                  ) : (
                    <>
                      <span>
                        {t.revision} <b className="font-semibold text-ink">{pkg.meta.revision}</b>
                      </span>
                      <span>
                        {t.done} <b className="font-semibold text-ink">{pkg.meta.done[lang]}</b>
                      </span>
                    </>
                  )}
                </div>

                <a
                  href={waHref(pkg.waText)}
                  data-umami-event="wa-click"
                  data-umami-event-source={`pricing-${pkg.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center justify-center gap-2 h-12 rounded-lg px-6
                    font-semibold text-[15px] transition-all duration-300 active:scale-95
                    outline-none focus-visible:ring-4 focus-visible:ring-primary/30
                    ${
                      featured
                        ? "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover"
                        : "border-[1.5px] border-primary text-primary hover:bg-tint"
                    }
                  `}
                >
                  {pkg.cta[lang]}
                </a>
              </div>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {addons.map((addon) => {
            const Icon = addon.icon;
            return (
              <div
                key={addon.title.en}
                className="flex gap-4 items-start rounded-xl bg-white/70 border border-slate-200 p-5 lg:p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-tint flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-title font-bold text-base text-ink mb-1">
                    {addon.title[lang]}
                  </h4>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {addon.description[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-8 font-body text-sm text-muted">{t.note}</p>
      </Container>
    </section>
  );
};

export default Pricing;
