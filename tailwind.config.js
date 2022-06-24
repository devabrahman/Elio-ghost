module.exports = {
    mode: "jit",
    purge: ["*.hbs"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                center: true,
            },
            backgroundImage: {
                "slider-img-1": "url('../img/bg.png')",
                "slider-img-2": "url('../img/bg-.jpg') ",
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
                roboto: ['"Roboto",sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
