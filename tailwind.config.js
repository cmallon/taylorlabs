module.exports = {
  purge: ["./src/**/*.js"],
  theme: {},
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms"), require("@tailwindcss/ui")],
};
