const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const plugins = [
  purgecss({
    content: ['src/**/*.html']
  }),
  cssnano()
]

module.exports = {
  plugins
}