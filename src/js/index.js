/**
 * Copyright © Tony Spegel
 */

import { addPrefetchLink } from 'add-prefetch-link';

const links = document.querySelectorAll(
  'a:not([href^="mailto:"]):not([href^="tel:"]):not([href^="#"])',
);

// Call addPrefetchLink on every link
links.forEach((link) => addPrefetchLink(link));

/**
 * Add a CSS class dynamically w/ IntersectionObserver
 */
const header = document.querySelector('#site-header');
const sentinelElement = document.querySelector('#sentinel-element');

const observerOptions = {
  rootMargin: `-${header.getBoundingClientRect().height}px`,
  treshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
    header.classList.add('opaque');
  } else {
    header.classList.remove('opaque');
  }
}, observerOptions);

observer.observe(sentinelElement);
