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
        blog_img_1: "url('../src/img/blogs/blog.jpg')",
        blog_img_2: "url('../src/img/blogs/blog-2.jpg')",
        blog_img_3: "url('../src/img/blogs/blog-3.jpg')",
        blog_img_4: "url('../src/img/blogs/blog-4.jpg')",
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
