/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.hbs"],
 darkMode: 'media',
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                theme_overlay: "#00000080",
                accent_color: "var(--ghost-accent-color)"
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
};
