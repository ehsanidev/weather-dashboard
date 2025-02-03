/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      fontFamily: {
        regularQuicksand: ["Quicksand", "sans-serif"],
        mediumQuicksand: ["Quicksand", "sans-serif"],
        semiBoldQuicksand: ["Quicksand", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
      },
      colors: {
        blue: {
          300: "#7FD1E8",
        },
        black: "#000000",
        white: "#FFFFFF",
        darkPurple: "#1e1a2e",
        deepPurple: "#2c1e3e",
      },
      spacing: {
        "100px": "100px",
        "150px": "150px",
        "18px": "18px",
        "200px": "200px",
        "260px": "260px",
        "350px": "350px",
        "360px": "360px",
      },
      borderRadius: {
        "7%": "7%",
      },
      outline: {
        2: "2px",
        4: "4px",
      },
      outlineOffset: {
        3: "3px",
      },
      backdropFilter: {
        blur: "5px",
      },
      animation: {
        twinkle: "twinkle 2s infinite ease-in-out",
        moveStars: "moveStars linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        moveStars: {
          "0%": { transform: "translate(100%, -100%)" },
          "100%": { transform: "translate(-100%, 100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
