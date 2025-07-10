/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.ejs",     // For all EJS templates
        "./public/**/*.js",     // Any JS files in public
        "./routes/**/*.js",     // If you are using Tailwind in JS too
        "./utils/**/*.js",      // Any utility/helper JS files
        "./app.js"],
    theme: {
        extend: {},
    },
    plugins: [],
}