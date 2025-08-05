/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // <- if you're using app directory
        "./pages/**/*.{js,ts,jsx,tsx}", // <- if you're using pages directory
        "./components/**/*.{js,ts,jsx,tsx}", // <- common for component folders
        "./src/**/*.{js,ts,jsx,tsx}", // <- if your source files are in /src
        "./**/*.html", // <- optional for html templates
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in forwards",
            },
            boxShadow: {
                "custom-100": "0 -4px 1.5px -4px rgba(0, 0, 0, 0.2), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            },
        },
    },
    plugins: [],
};
