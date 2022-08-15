
import nav from './modules/nav.js';
import images from './modules/images.js';
import sliders from './modules/sliders.js';

window.addEventListener("DOMContentLoaded", () => {
  // "use strict";

  images();
  nav();
  sliders('horizontal');
});