/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      fontWeight: {
        400: 400,
        700: 700,
      },

      width: {
        "375px": "375px",
        "360px": "360px",
        "328px": "328px",
        "60%": "60%",
        "260px": "260px",
        "1200px": "1200px",
        "1000px": "1000px",
        "500px": "500px",
        "430px": "430px",
      },

      height: {
        "255px": "255px",
        "175px": "175px",
        "300px": "300px",
      },
      inset: {
        "72px": "72px",
      },

      translate: {
        customTranslate: "",
      },
      fontSize: {
        0.5: "0.7rem",
      },
    },
  },
  plugins: [],
};
