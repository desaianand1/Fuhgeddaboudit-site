/** @type {import("prettier").Options} */
const config = {
    trailingComma: "es5",
    tabWidth: 4,
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindConfig: "./tailwind.config.ts",
};

module.exports = config;
