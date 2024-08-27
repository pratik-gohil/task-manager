/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        grey: "var(--grey)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        border: "var(--border)",

        neutral: "var(--neutral)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
    },
  },
  plugins: [],
};
