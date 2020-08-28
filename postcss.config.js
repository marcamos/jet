const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const plugins = [autoprefixer(), cssnano()];

module.exports = {
  plugins,
};
