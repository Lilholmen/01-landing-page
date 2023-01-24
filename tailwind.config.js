/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      md: "792px",
      lg: "1280px",
    },
    colors: {
      black: "#27272A",
      grey: "#696969",
      light: "#E5E7EB",
      white: "#FCFBFA",
      purple: "#7E3AF2",
      red: "#E02424",
    },
    fontSize: {
      "m-body": [
        "0.875rem",
        {
          lineHeight: "21px",
          fontWeight: "400",
        },
      ],
      "m-sub-2": [
        "0.875rem",
        {
          lineHeight: "21px",
          fontWeight: "600",
        },
      ],
      "m-sub": [
        "1.25rem",
        {
          lineHeight: "30px",
          fontWeight: "600",
        },
      ],
      "m-xl": [
        "1.5rem",
        {
          lineHeight: "60px",
          fontWeight: "700",
        },
      ],
      "body-2": [
        "1rem",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      body: [
        "1.25rem",
        {
          lineHeight: "30px",
          fontWeight: "400",
        },
      ],
      "sub-2": [
        "1rem",
        {
          lineHeight: "24px",
          fontWeight: "600",
        },
      ],
      body: [
        "1.25rem",
        {
          lineHeight: "30px",
          fontWeight: "600",
        },
      ],
      "h-3": [
        "1.5rem",
        {
          lineHeight: "36px",
          fontWeight: "700",
        },
      ],
      "h-2": [
        "2rem",
        {
          lineHeight: "48px",
          fontWeight: "700",
        },
      ],
      "h-1": [
        "3.75rem",
        {
          lineHeight: "90px",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      backgroundImage: {
        gradient: "url('/assets/gradient.png')",
      },
    },
  },
  plugins: [],
};
