/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false, // TEMP: dimatiin buat diagnosa hydration mismatch di LanguageContext
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
