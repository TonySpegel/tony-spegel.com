/**
 * Check if page.url in 11ty starts with a certain string.
 * page.url could be: /tags/blog/
 */
function urlStartsWith(eleventyConfig) {
  eleventyConfig.addFilter('urlStartsWith', (url, searchString) => {
    return String(url).startsWith(searchString);
  });
}

module.exports = urlStartsWith;
