function filterTagMetaData(eleventyConfig) {
  eleventyConfig.addFilter('filterTagMetaData', (data, tagName) => {
    return (data || []).filter((tag) => tag.tagName === tagName)[0];
  });
}

module.exports = filterTagMetaData;
