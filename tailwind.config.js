module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../src/img/bg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
