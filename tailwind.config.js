module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "slider-img-1": "url('../src/img/bg.png')",
      },

      colors: {
        theme_overlay: "#00000080",
        accent_color: "#00FF29",
      },
      screens: {
        xsm: "320",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
