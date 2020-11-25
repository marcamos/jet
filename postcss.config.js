const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const plugins = [tailwindcss(), autoprefixer(), cssnano()];

module.exports = {
  plugins
};