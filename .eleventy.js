module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addWatchTarget('./src/css/tailwind.css');
    eleventyConfig.addPassthroughCopy('./src/css/styles.css');
    eleventyConfig.addPassthroughCopy('./src/img');
    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    }
}