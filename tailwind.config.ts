import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js,ts}"],
    theme: {
        extend: {
            colors: {
                "hero-example-img": "#25293C",
                "primary-100": "#dfd7ff",
                "primary-200": "#bdb1ff",
                "primary-300": "#978cff",
                "primary-400": "#6868ff",
                "primary-500": "#0046ff",
                "primary-600": "#1d39c7",
                "primary-700": "#212c91",
                "primary-800": "#1e1f5f",
                "primary-900": "#161431",
                "surface-900": "#000e33",
                "surface-800": "#1c2547",
                "surface-700": "#363c5c",
                "surface-600": "#515472",
                "surface-500": "#6c6e88",
                "surface-400": "#87899f",
                "surface-300": "#A7ACBB",
                "surface-200": "#C2C6D2",
                "surface-100": "#DEE1E8",
                "surface-000": "#FAFBFF",
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
