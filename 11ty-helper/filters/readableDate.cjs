/**
 * A filter which can be used to format dates given from 11ty
 */
function readableDate(eleventyConfig) {
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return new Intl.DateTimeFormat('de-DE', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(dateObj);
  });
}

module.exports = readableDate;

