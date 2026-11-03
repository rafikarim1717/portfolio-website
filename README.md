# Rafi Karim — Portfolio Website

Website portfolio & jasa pembuatan website buat bisnis lokal. Dua bahasa (Indonesia default, English via toggle).

**Live:** https://portfolio-website-beta-kohl.vercel.app

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · lucide-react · Umami analytics · deploy di Vercel

## Jalanin lokal

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Struktur singkat

- `src/app/page.js` — halaman utama: Hero → About → Tools → Projects → Cara Kerja → Pricing → Testimoni → Contact → Footer
- `src/app/projects/[slug]/` — halaman studi kasus per proyek
- `src/components/` — satu file per section; copy (ID & EN) ditulis langsung di atas tiap file
- `src/data/projects.js` — data proyek + testimoni (sumber buat grid, studi kasus, sitemap, testimoni)
- `src/context/LanguageContext.jsx` — toggle bahasa ID/EN
- `src/app/globals.css` — design token warna & font

Detail lengkap buat developer/AI ada di [`CLAUDE.md`](./CLAUDE.md).
