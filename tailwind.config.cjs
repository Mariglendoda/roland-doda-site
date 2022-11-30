/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontWeight: {
        regular: "400",
        bold: "700",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        48: "48px",
      },

      colors: {
        primary: "#030E21",
        secondary: "#091427",
        gray: "#96999F",
        orange: "#ee7a0f",
        red: "#D35A5E",
        green: "#0fffc5",
        blue: "#18B9FF",
        graystarry: "#2E4455",
        yellow: "#FAF2C1",
      },

      borderRadius: {
        10: "10px",
      },
    },
  },

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".bg-gradient": {
          background: "linear-gradient(269deg, #1099fd 0%, #0fcffe 30.32%, #0fffc5 100%)",
        },

        ".bg-linear-card": {
          background: "linear-gradient(269.91deg, #011627 0.08%, rgba(1, 22, 39, 0) 98.92%)",
        },

        ".bg-glassmorphism": {
          background: "linear-gradient(168deg, #ffffff66 0%, #ffffff1a 100%)",
        },

        ".bg-testimonial": {
          background: "linear-gradient(180deg, #011627 5.53%, rgba(1, 22, 39, 0) 100%)",
          transform: "matrix(1, 0, 0, -1, 0, 0)",
        },

        ".bg-box": {
          background: "linear-gradient(180.67deg, rgba(255, 255, 255, 0.4) -136.79%, rgba(255, 255, 255, 0.1) 49.83%)",
          backdropFilter: "blur(45px)",
          border: "1px solid #FFFFFF",
          borderRadius: "20px",
        },

        ".rgba": {
          background: "rgba(255, 255, 255, 0.1)",
        },

        ".bg-hide": {
          background: "linear-gradient(177.46deg, rgba(1, 22, 39, 0) -364.45%, #011627 97.88%)",
        },

        ".h1": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.48"),
          fontWeight: theme("fontWeight.bold"),
          textTransform: "capitalize",
        },

        ".h2": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.24"),
          fontWeight: theme("fontWeight.bold"),
          textTransform: "capitalize",
        },

        ".h3": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.18"),
          fontWeight: theme("fontWeight.bold"),
          textTransform: "capitalize",
        },

        ".h4": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.16"),
          fontWeight: theme("fontWeight.bold"),
          textTransform: "capitalize",
        },

        ".description": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.16"),
          fontWeight: theme("fontWeight.regular"),
        },

        ".subtitle": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.14"),
          fontWeight: theme("fontWeight.regular"),
        },
        ".hide-scrollbar": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".ellipsis-3": {
          display: "-webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },

        ".service": {
          background: "#011c32",
          boxShadow:
            "0px 8px 40px rgba(44, 97, 123, 0.25), inset 10px 10px 24px rgba(12, 53, 86, 0.45), inset -10px -10px 28px #010e18",
          backdropFilter: "blur(2.5px)",
        },
      })
    },
  ],
}
