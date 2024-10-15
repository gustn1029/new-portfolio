/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "warm-gradient": "linear-gradient(135deg, #FFA726, #FFCC74)",
        'fade-sides': 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
      },
      colors: {
        primary: "#eab308",
        point: "#FFCC74",
      },
      maskImage: {
        "fade-to-transparent":
          "linear-gradient(to right, transparent 100%, black 30%, black 70%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
