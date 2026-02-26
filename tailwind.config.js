/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Mapping the custom colors used in your HTML
      // colors: {
      //   primary: {
      //     DEFAULT: "#4251EB", // The blue in your logo
      //     foreground: "#ffffff",
      //   },
      //   background: "white", // Or your specific theme color
      //   foreground: "#0f172a",
      //   border: "hsl(var(--border))", // If using shadcn, otherwise use a hex code
      // },
    },
    // This is the part that fixes your padding/width issue
    container: {
      center: true, // Forces mx-auto automatically
      // padding: {
      //   DEFAULT: '1.5rem', // This is the px-6 you see in the HTML
      // },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
