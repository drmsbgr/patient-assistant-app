/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9",
                secondary: "#10b981",
                background: "#f8fafc",
                surface: "#ffffff",
                text: "#0f172a",
                textSoft: "#64748b",
                danger: "#ef4444",
                warning: "#f59e0b"
            }
        },
    },
    plugins: [],
}
