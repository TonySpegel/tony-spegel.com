function htmlDateString(eleventyConfig) {
  const dateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    const [day, month, year] = new Intl.DateTimeFormat('de-DE', dateOptions)
      .format(dateObj)
      .split('.');

    return `${year}-${month}-${day}`;
  });
}

module.exports = htmlDateString;
