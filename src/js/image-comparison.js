/**
 * Copyright © Tony Spegel
 */

import 'image-comparison-component/image-comparison.js';

const imageComparisonDemoComponent = document.querySelector(
  '#image-comparison-demo',
);

const radioButtonVariants = document.querySelectorAll('input[name="variant"]');
// const radioButtonReadingDirections = document.querySelectorAll(
//   'input[name="reading-direction"]',
// );

radioButtonVariants.forEach((radioButton) =>
  radioButton.addEventListener('change', (e) => {
    const { value } = e.target;
    imageComparisonDemoComponent.setAttribute('variant', value);
  }),
);

/**
 * While this works, it's not as pleasant to look at as the whole pages shifts
 */
// radioButtonReadingDirections.forEach((rbDirection) => {
//   rbDirection.addEventListener('click', (e) => {
//     const { value } = e.target;
//     document.querySelector('html').setAttribute('dir', value);
//   });
// });
