import 'theme-switch-component';

/**
 * DialogEvent is used to reference the targetElement
 * which has opened the ThemeSwitch component.
 * This needs to be done to re-select it after closing
 * the dialog.
 */
class DialogEvent extends Event {
  static eventName = 'dialog-event';
  targetElement = '';

  constructor(targetElement) {
    super(DialogEvent.eventName, { bubbles: true });
    this.targetElement = targetElement;
  }
}

/**
 * Button to toggle the visibility of <theme-selection>
 * by dispatching the DialogEvent
 */
document
  .querySelector('#btn-theme-selection')
  .addEventListener('click', (event) => {
    const { target } = event;
    window.dispatchEvent(new DialogEvent(target));
  });

/**
 * Listen for the theme-event to happen to change
 * the 'theme-preference' attribute
 */
window.addEventListener('theme-event', (themeEvent) => {
  const { themeName } = themeEvent;

  document.documentElement.setAttribute('theme-preference', themeName);
});

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
