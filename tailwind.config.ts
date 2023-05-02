import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0046ff",
        "on-primary": "#FFFFFF",
        "primary-tint-10": "#ccdaff",
        "on-primary-tint-10": "#00154c",
        "primary-tint-30": "#99b5ff",
        "on-primary-tint-30": "#00154c",
        "primary-shade-70": "#0038cc",
        "on-primary-shade-70": "#EBF1FF",
        deemphasized: "#444b6a",
        "primary-dark": "#7096ff",
        "on-primary-dark": "#000A24",
        "primary-dark-shade-90": "#000e33",
        "on-primary-dark-shade-90": "#759AFF",
        "primary-dark-shade-70": "#002380",
        "on-primary-dark-shade-70": "#A8BFFF",
        "primary-dark-tint-30": "#8FADFF",
        "on-primary-dark-tint-30": "#00185C",
        "deemphasized-dark": "#444b6a",
        "hero-img": "#25293B",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "Lato",
          "Noto Sans",
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
