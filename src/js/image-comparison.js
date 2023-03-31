/**
 * Copyright © Tony Spegel
 */

import 'image-comparison-component/image-comparison.js';

const imageComparisonDemoComponent = document.querySelector(
  '#image-comparison-demo',
);

const radioButtons = document.querySelectorAll('input[name="variant"]');

radioButtons.forEach((radioButton) =>
  radioButton.addEventListener('change', (e) => {
    const { value } = e.target;
    imageComparisonDemoComponent.setAttribute('variant', value);
  }),
);
