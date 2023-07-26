import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts}"],
    theme: {
        extend: {
            colors: {
                deemphasized: "#444b6a",
                "hero-example-img": "#25293C",
                "primary-100": "#0046ff",
                "primary-200": "#4d59ff",
                "primary-300": "#6e6cff",
                "primary-400": "#8980ff",
                "primary-500": "#a094ff",
                "primary-600": "#b5a9ff",
                /** CSS DARK THEME SURFACE COLORS */
                "surface-100": "#000e33",
                "surface-200": "#1c2547",
                "surface-300": "#363c5c",
                "surface-400": "#515472",
                "surface-500": "#6c6e88",
                "surface-600": "#87899f",
                /** CSS DARK THEME BLENDED SURFACE COLORS */
                "surface-blend-100": "#001545",
                "surface-blend-200": "#222a58",
                "surface-blend-300": "#3d406b",
                "surface-blend-400": "#57597f",
                "surface-blend-500": "#717294",
                "surface-blend-600": "#8c8ca8",
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
