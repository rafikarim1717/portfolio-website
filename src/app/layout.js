import { Inter, Poppins } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // regular, medium
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // regular, semibold, bold
  variable: "--font-poppins",
});

const SITE_URL = "https://portfolio-website-beta-kohl.vercel.app";
const SITE_TITLE = "Rafi - Software Engineer";
// Metadata (title/description/OG) dikunci ke Bahasa Indonesia — ini gak ikut
// toggle bahasa client-side, jadi disamain sama bahasa default situs.
const SITE_DESCRIPTION =
  "Full-stack web developer yang membangun dashboard custom, sistem bisnis, dan platform ber-AI dengan arsitektur modern — untuk bisnis yang butuh lebih dari sekadar homepage.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Rafi",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Web Development",
    "Custom Web Systems",
    "AI Integration",
  ],
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_TITLE,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  other: {
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
