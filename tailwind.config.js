module.exports = {
  content: [
    "./{src,public}/**/*.{html,js,ts,jsx,tsx}",
    "./src/Pages/*.tsx",
    "./src/Components/*.tsx",
    { raw: "<div class=min-h-screen", extension: "html" },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    colors: {
      dark: "#1d232a",
      "primary-shade-2": "#6159cb",
    },
  },
};
