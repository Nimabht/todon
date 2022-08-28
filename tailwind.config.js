/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        check: "0px 0px 6px green",
        delete: "0px 0px 6px red",
        favorite: "0px 0px 6px yellow",
        edit: "0px 0px 6px blue",
      },
    },
  },
  plugins: [],
};
