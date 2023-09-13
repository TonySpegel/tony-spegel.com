/**
 * TODO: documentation
 */
function readableDate(eleventyConfig) {
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return new Intl.DateTimeFormat('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(dateObj);
  });
}

module.exports = readableDate;

