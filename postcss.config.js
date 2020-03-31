const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const plugins = [
  tailwindcss('tailwind.config.js'),
  purgecss({
    content: ['src/**/*.html']
  }),
  cssnano()
]

module.exports = {
  plugins
}