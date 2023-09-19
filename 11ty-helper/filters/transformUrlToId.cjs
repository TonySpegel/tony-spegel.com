/**
 * WIP for preparing css view-transtions in template used as:
 * style="view-transition-name: post{{ post|page.url | transformUrlToId }}"
 *
 * I think this need to be used too: <meta name="view-transition" content="same-origin" />
 */
function transformUrlToId(eleventyConfig) {
  eleventyConfig.addFilter('transformUrlToId', (url) => {
    /**
     * a URL ends with '/' so cut off the last '-' that was replaced
     */
    return String(url).replaceAll('/', '-').slice(0, -1);
  });
}

module.exports = transformUrlToId;
