module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}