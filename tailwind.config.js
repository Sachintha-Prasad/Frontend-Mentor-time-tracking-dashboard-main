/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.{html,js}"],
    theme: {
        fontFamily: {
            rubic: ["Rubik", "sans-serif"]
        },
        colors: {
            Blue: "hsl(246, 80%, 60%)",
            Work: " hsl(15, 100%, 70%)",
            Play: "hsl(195, 74%, 62%)",
            Study: " hsl(348, 100%, 68%)",
            Exercise: "hsl(145, 58%, 55%)",
            Social: "hsl(264, 64%, 52%)",
            "Self-Care": "hsl(43, 84%, 65%)",
            "very-dark-blue": "hsl(226, 43%, 10%)",
            "dark-blue": "hsl(235, 46%, 20%)",
            "desaturated-blue": "hsl(235, 45%, 61%)",
            "pale-blue": "hsl(236, 100%, 87%)",
            white: "#fff"
        },
        extend: {
            screens: {
                sm: "436px"
            }
        }
    },
    plugins: []
};
