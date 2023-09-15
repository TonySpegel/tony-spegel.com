const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('cssMin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
