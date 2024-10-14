/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "warm-gradient": "linear-gradient(135deg, #FFA726, #FFCC74)",
      },
      colors: {
        primary: "#eab308",
        point: "#FFCC74",
      },
      maskImage: {
        "fade-to-transparent":
          "linear-gradient(to top, black 70%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
