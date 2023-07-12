module.exports = {
  content: [
    "./{src,public}/**/*.{html,js,ts,jsx,tsx}",
    "./src/Pages/*.tsx",
    "./src/Components/*.tsx",
    { raw: "<div class=min-h-screen", extension: "html" },
  ],
  plugins: [require("daisyui", "tailwind-scrollbar")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    colors: {
      dark: "#1d232a",
      "primary-shade": "#4D46B5",
      "complementary-1": "#CB616F",
      "complementary-2": "#61CB79",
      "analogous-1": "#5961CB",
      "analogous-2": "#615BCB",
      "analogous-3": "#6951CB",
      "monochromatic-lighter": "#7E79D8",
      "monochromatic-lightest": "#9D99E4",
      "monochromatic-darker": "#4D46B5",
      "monochromatic-darkest": "#2D2981",
    },
  },
};
