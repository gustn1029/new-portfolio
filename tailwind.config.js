/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maskImage: {
        "fade-to-transparent":
          "linear-gradient(to top, black 70%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
