const fs = require('fs');

const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItHeaderSections = require('markdown-it-header-sections');
const slugify = require('@sindresorhus/slugify');
const pluginTOC = require('eleventy-plugin-nesting-toc');

const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginNavigation = require('@11ty/eleventy-navigation');
const externalLinks = require('eleventy-plugin-external-links');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

const cssMin = require('./11ty-helper/filters/cssMin.cjs');
const filterTagMetaData = require('./11ty-helper/filters/filterTagMetaData.cjs');
const htmlDateString = require('./11ty-helper/filters/htmlDateString.cjs');
const readableDate = require('./11ty-helper/filters/readableDate.cjs');
const urlStartsWith = require('./11ty-helper/filters/urlStartsWith.cjs');

const DEV = process.env.NODE_ENV === 'DEV';
const outputFolder = DEV ? '_dev' : '_prod';

module.exports = function (eleventyConfig) {
  // Copy folders & files to the output directory
  eleventyConfig
    .addPassthroughCopy('src/CNAME')
    .addPassthroughCopy('src/_includes/css')
    .addPassthroughCopy('src/fonts')
    .addPassthroughCopy('src/img')
    .addPassthroughCopy('src/js/')
    .addPassthroughCopy('src/js/ssr')
    .addPassthroughCopy('src/*.svg')
    .addPassthroughCopy('src/robots.txt');

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginTOC, {
    ul: true,
    tags: ['h2', 'h3'],
  });
  eleventyConfig.addPlugin(require('./eleventy.config.drafts.js'));
  eleventyConfig.addPlugin(externalLinks, {
    // Plugin defaults:
    name: 'external-links', // Plugin name
    regex: /^(([a-z]+:)|(\/\/))/i, // Regex that test if href is external
    target: '_blank', // 'target' attribute for external links
    rel: 'noopener noreferrer', // 'rel' attribute for external links
    extensions: ['.html'], // Extensions to apply transform to
    includeDoctype: true, // Default to include '<!DOCTYPE html>' at the beginning of the file
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin, {
    tagName: 'renderTemplate', // Change the renderTemplate shortcode name
    tagNameFile: 'renderFile', // Change the renderFile shortcode name
  });

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  cssMin(eleventyConfig);
  filterTagMetaData(eleventyConfig);
  htmlDateString(eleventyConfig);
  readableDate(eleventyConfig);
  urlStartsWith(eleventyConfig);

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }

    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) =>
        ['all', 'nav', 'post', 'posts', 'footer', 'blog'].indexOf(tag) === -1,
    );
  }

  eleventyConfig.addFilter('filterTagList', filterTagList);

  // Create an array of all tags
  eleventyConfig.addCollection('tagList', function (collection) {
    const tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  eleventyConfig.addGlobalData('env', process.env.NODE_ENV);

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(markdownItHeaderSections)
    // .use(markdownItAnchor, {
    //   permalink: markdownItAnchor.permalink.ariaHidden({
    //     placement: "after",
    //     class: "direct-link",
    //     symbol: "#",
    //     level: [1,2,3,4],
    //   }),
    //   slugify: eleventyConfig.getFilter("slug")
    // });
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
      tabIndex: false,
      slugify: (s) => slugify(s),
    });
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('site/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: '/',
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: 'src',
      output: outputFolder,
      includes: '_includes',
      layouts: '_includes/layouts',
      data: '_data',
    },
  };
};
