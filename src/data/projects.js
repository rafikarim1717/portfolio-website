export const projects = [
  {
    id: 1,
    slug: "seven-retail",
    title: "Seven Retail",
    description: {
      id: "Company profile buat grup retail dengan banyak brand. Tim mereka bisa update konten & lowongan kerja sendiri tanpa nunggu developer.",
      en: "A company profile for a multi-brand retail group. Their team can update content and job listings on their own, without waiting on a developer.",
    },
    image: "/portfolio/cover-seven-retail.png",
    category: "Company Profile",
    tags: ["Retail", "Headless CMS", "Next.js"],
    link: "https://seven-retail.com",
    industry: {
      id: "House of Brands – Grup Retail Multi-Industri",
      en: "House of Brands – Multi-Industry Retail Group",
    },
    location: "Jakarta, Indonesia",
    techStack: ["Next.js", "Tailwind CSS", "Headless CMS"],
    caseStudy: {
      "problemTitle": {
        "id": "Tiap ganti konten harus nunggu developer.",
        "en": "Every content change had to wait for a developer."
      },
      "problem": {
        "id": "Seven Retail punya banyak brand (dari F&B sampai klinik estetika) dan lagi ganti identitas. Konten web lamanya hardcoded, jadi update info perusahaan sampai lowongan kerja selalu lewat developer.",
        "en": "Seven Retail runs many brands, from F&B to aesthetic clinics, and was refreshing its identity. The old site was hardcoded, so even company updates and job listings had to go through a developer."
      },
      "solutionTitle": {
        "id": "Website baru yang bisa diurus tim mereka sendiri.",
        "en": "A new site their own team can manage."
      },
      "points": {
        "id": [
          "Dibangun ulang pakai headless CMS",
          "Tim bisa update konten & lowongan kerja tanpa coding",
          "Struktur simpel: Home, About, Career, Contact",
          "Desain ngikutin identitas brand yang baru"
        ],
        "en": [
          "Rebuilt on a headless CMS",
          "Team updates content & job listings without code",
          "Simple structure: Home, About, Career, Contact",
          "Design follows the refreshed brand identity"
        ]
      }
    },
    testimonial: {
      quote: {
        id: "Rafi sangat responsif dan memahami kebutuhan kami, bahkan saat revisi berkali-kali selalu siap membantu. Kami sangat puas dengan hasil akhirnya.",
        en: "Rafi was incredibly responsive and understood exactly what we needed — even through multiple rounds of revisions, he was always ready to help. We're very happy with the final result.",
      },
      name: "Seven Retail",
      role: { id: "House of Brands", en: "House of Brands" },
      rating: 4.8,
      clientLogo: "/logo/logo-seven-new-last.svg",
    },
  },
  {
    id: 2,
    slug: "pt-ikonoa-solusindo-asia",
    title: "PT Ikonoa Solusindo Asia",
    description: {
      id: "Company profile buat perusahaan pialang asuransi. Layanan, pengalaman, dan alur klaim dijelasin dengan jelas biar calon klien langsung percaya.",
      en: "A company profile for an insurance brokerage. Services, experience, and the claims process are laid out clearly so prospective clients can trust them from the first visit.",
    },
    image: "/portfolio/cover-ikonoa.png",
    category: "Company Profile",
    tags: ["Insurance", "Company Profile", "Next.js"],
    link: "https://www.ikonoa.com/",
    industry: {
      id: "Asuransi & Manajemen Risiko",
      en: "Insurance & Risk Management",
    },
    location: "Jakarta, Indonesia",
    techStack: ["Next.js", "Tailwind CSS", "WhatsApp Integration"],
    caseStudy: {
      "problemTitle": {
        "id": "Calon klien nggak tau Ikonoa ngapain.",
        "en": "Prospects couldn't tell what Ikonoa does."
      },
      "problem": {
        "id": "Ikonoa belum punya website. Calon klien yang lagi riset nggak bisa lihat pengalaman mereka sebagai pialang asuransi, apa aja layanannya, atau gimana proses klaimnya.",
        "en": "Ikonoa had no website. Prospects researching them couldn't see their brokerage experience, what services they offer, or how claims work."
      },
      "solutionTitle": {
        "id": "Company profile yang jelasin semuanya.",
        "en": "A company profile that explains it all."
      },
      "points": {
        "id": [
          "Fokus industri & rekam jejak ditampilin di depan",
          "Tiap layanan dijelasin: cakupan & alur prosesnya",
          "Alur klaim step by step",
          "Tombol WhatsApp buat langsung nanya"
        ],
        "en": [
          "Industry focus & track record up front",
          "Each service explained: scope & process",
          "Step-by-step claims flow",
          "WhatsApp button for quick questions"
        ]
      }
    },
    testimonial: {
      quote: {
        id: "Sangat responsif dan profesional dalam menangani kebutuhan kami. Hasil kerjanya melebihi ekspektasi kami dan tim mereka selalu siap membantu kapan saja.",
        en: "Extremely responsive and professional in handling our needs. The results exceeded our expectations, and the team was always ready to help whenever we needed them.",
      },
      name: "PT Ikonoa Solusindo Asia",
      role: { id: "Pialang Asuransi", en: "Insurance Brokerage" },
      rating: 4.9,
      clientLogo: "/logo/logo-ikonoa.jpg",
    },
  },
  {
    id: 3,
    slug: "wisma-52",
    title: "Wisma 52",
    description: {
      id: "Landing page kos eksklusif di Jakarta Pusat. Info kamar, harga, dan lokasi jelas biar calon penyewa nggak nanya berulang-ulang.",
      en: "A landing page for an exclusive boarding house in Central Jakarta. Clear room, price, and location info so prospective tenants don't have to keep asking the same questions.",
    },
    image: "/portfolio/cover-wisma-52.png",
    category: "Business Profile",
    tags: ["Inn", "Next.js", "Premium"],
    link: "https://wisma-52.vercel.app/",
    industry: { id: "Hospitality & Properti", en: "Hospitality & Property" },
    location: "Jakarta, Indonesia",
    techStack: ["Next.js", "Tailwind CSS", "WhatsApp Integration"],
    caseStudy: {
      "problemTitle": {
        "id": "Calon penyewa nanya hal yang sama terus.",
        "en": "Prospective tenants kept asking the same things."
      },
      "problem": {
        "id": "Harga, tipe kamar, foto, aturan kos. Semua dijawab manual satu per satu lewat chat, sebelum ada yang jadi booking.",
        "en": "Prices, room types, photos, house rules. All answered manually, one chat at a time, before anyone booked."
      },
      "solutionTitle": {
        "id": "Semua info penting di satu halaman.",
        "en": "Everything important on one page."
      },
      "points": {
        "id": [
          "Tipe kamar & harga ditampilin jelas di depan",
          "Foto kamar asli, bukan foto stok",
          "Lokasi + tempat penting di sekitar",
          "Tombol WhatsApp langsung buat booking"
        ],
        "en": [
          "Room types & prices shown up front",
          "Real room photos, not stock",
          "Location + nearby landmarks",
          "WhatsApp button straight to booking"
        ]
      }
    },
    testimonial: {
      quote: {
        id: "Timnya sabar banget jelasin setiap tahap prosesnya, komunikasinya juga responsif dan ramah dari awal sampai project selesai.",
        en: "The team was incredibly patient explaining every step of the process, and communication stayed responsive and friendly from start to finish.",
      },
      name: "Fatih Azka",
      role: { id: "Pemilik Wisma 52", en: "Owner, Wisma 52" },
      rating: 4.8,
      clientLogo: "/logo/logo-wisma-52.png",
    },
  },
  {
    id: 4,
    slug: "genova-indonesia",
    title: "Genova Indonesia",
    description: {
      id: "Katalog produk buat produsen sirup lokal. Tiap produk langsung nyambung ke Tokopedia, jadi pembeli tinggal klik dan checkout.",
      en: "A product catalog for a local syrup producer. Every product links straight to Tokopedia, so buyers just click and check out.",
    },
    image: "/portfolio/cover-genova.png",
    category: "Product Catalog",
    tags: ["F&B", "Catalog", "Next.js"],
    link: "https://genova-indonesia.id",
    industry: { id: "Makanan & Minuman (F&B)", en: "Food & Beverage (F&B)" },
    location: "Jakarta, Indonesia",
    techStack: ["Next.js", "Tailwind CSS", "Tokopedia API", "WhatsApp Integration"],
    status: "inactive",
    caseStudy: {
      "problemTitle": {
        "id": "Jualan cuma di Tokopedia, brand-nya nggak kelihatan.",
        "en": "Selling only on Tokopedia, the brand got lost."
      },
      "problem": {
        "id": "Genova jualan sirup lewat Tokopedia, tapi belum punya tempat buat nampilin katalog lengkap dan lokasi cabangnya. Listing marketplace nggak dibikin buat itu.",
        "en": "Genova sold its syrups on Tokopedia but had nowhere to show the full catalog and its branch locations. Marketplace listings aren't built for that."
      },
      "solutionTitle": {
        "id": "Katalog brand yang tetap jualan lewat Tokopedia.",
        "en": "A brand catalog that still sells through Tokopedia."
      },
      "points": {
        "id": [
          "Semua produk ditampilin dalam satu katalog",
          "Tiap produk nyambung langsung ke Tokopedia",
          "Daftar lokasi cabang",
          "Tombol WhatsApp buat pertanyaan"
        ],
        "en": [
          "Every product in one catalog",
          "Each product links straight to Tokopedia",
          "Branch locations listed",
          "WhatsApp button for questions"
        ]
      }
    },
    testimonial: {
      quote: {
        id: "Sangat puas dengan hasilnya maupun dengan pelayanan yang responsif. Sangat direkomendasikan.",
        en: "Very happy with both the result and the responsive service. Highly recommended.",
      },
      name: "Genova Indonesia",
      role: { id: "Produsen Sirup", en: "Syrup Manufacturer" },
      rating: 4.7,
      clientLogo: "/logo/logo-genova.jpg",
    },
  },
  {
    id: 5,
    slug: "pt-multi-sarana-pelindung",
    title: "PT Multi Sarana Pelindung",
    description: {
      id: "Company profile buat broker asuransi. Layanan, produk, dan lokasi kantor dijelasin rapi biar calon klien yakin sebelum ngehubungin.",
      en: "A company profile for an insurance broker. Services, products, and office location are laid out clearly so prospects feel confident before reaching out.",
    },
    image: "/portfolio/cover-msp.png",
    category: "Company Profile",
    tags: ["Insurance", "Company Profile", "HTML"],
    link: "https://www.multisaranapelindung.com/",
    industry: { id: "Asuransi", en: "Insurance" },
    location: "Jakarta, Indonesia",
    techStack: ["HTML", "Tailwind CSS", "Google Business Profile"],
    caseStudy: {
      "problemTitle": {
        "id": "Nggak ada website, susah dipercaya.",
        "en": "No website made trust hard to earn."
      },
      "problem": {
        "id": "MSP belum pernah punya website. Nggak ada tempat buat nunjukin visi misi, lini bisnis, dan partner mereka ke calon klien.",
        "en": "MSP had never had a website, with nowhere to show prospects their vision, business lines, and partners."
      },
      "solutionTitle": {
        "id": "Company profile lengkap + muncul di Google.",
        "en": "A complete company profile, now on Google."
      },
      "points": {
        "id": [
          "Visi misi, lini bisnis & partner di beranda",
          "Halaman khusus produk asuransi & prosesnya",
          "Galeri, lokasi kantor & jam kunjungan",
          "Setup Google Business Profile"
        ],
        "en": [
          "Vision, business lines & partners on the homepage",
          "Dedicated insurance product page & process",
          "Gallery, office location & visiting hours",
          "Google Business Profile setup"
        ]
      }
    },
    testimonial: {
      quote: {
        id: "Hasil websitenya bagus meski harganya relatif terjangkau dibanding layanan lain. Sangat cepat dalam merespons pertanyaan, support dari awal tahap desain, dan membantu konfigurasi email custom juga.",
        en: "The website turned out great, and the price was quite affordable compared to other services. Super quick to respond to questions, supported us from the design stage, and even helped set up our custom email.",
      },
      name: "PT Multi Sarana Pelindung",
      role: { id: "Asuransi", en: "Insurance" },
      rating: 4.8,
      clientLogo: "/logo/logo-multi-sarana-pelindung.webp",
    },
  },
  {
    id: 6,
    slug: "aura-clinic",
    title: "Aura Clinic",
    description: {
      id: "Konsep website buat klinik estetika baru. Tiap treatment dijelasin jelas, dan booking langsung lewat WhatsApp.",
      en: "A website concept for a new aesthetic clinic. Every treatment is explained clearly, with booking straight through WhatsApp.",
    },
    image: "/portfolio/cover-aura-clinic.png",
    category: "Clinic Concept",
    tags: ["Clinic", "Concept", "React"],
    link: "https://aura-clinic-pi.vercel.app/",
    industry: {
      id: "Kesehatan & Estetika",
      en: "Healthcare & Aesthetics",
    },
    location: "Jakarta, Indonesia",
    techStack: ["React", "Static HTML"],
    caseStudy: {
      "problemTitle": {
        "id": "Klinik baru harus dipercaya orang asing.",
        "en": "A new clinic needs strangers to trust it."
      },
      "problem": {
        "id": "Ini proyek konsep. Klinik estetika yang baru buka belum punya reputasi, dan calon pasien butuh tiap treatment dijelasin dulu sebelum berani booking.",
        "en": "This is a concept project. A newly opened aesthetic clinic has no reputation yet, and patients need each treatment explained before they'll book."
      },
      "solutionTitle": {
        "id": "Website yang jawab pertanyaan pasien duluan.",
        "en": "A site that answers patients' questions first."
      },
      "points": {
        "id": [
          "Cerita klinik, visi & profil dokter",
          "6 halaman treatment: manfaat, proses, cocok buat siapa, FAQ",
          "Halaman FAQ umum",
          "Booking langsung lewat WhatsApp"
        ],
        "en": [
          "Clinic story, vision & doctor profiles",
          "6 treatment pages: benefits, process, who it's for, FAQ",
          "General FAQ page",
          "Booking straight through WhatsApp"
        ]
      }
    },
  },
];
