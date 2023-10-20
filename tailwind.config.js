/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./dist/index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    // eslint-disable-next-line no-undef
    plugins: [require("@tailwindcss/typography")],
}

