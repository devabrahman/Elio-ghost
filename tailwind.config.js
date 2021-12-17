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
        "slider-img-2": "url('../src/img/bg-.jpg')",
        // blog image
        blog_img_1: "url('../src/img/blog.jpg')",
      },
      colors: {
        theme_overlay: "#00000080",
        accent_color: "#00FF29",
      },
      screens: {
        xsm: "320",
      },
      fontFamily: {
        roboto: ['"Roboto",sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
