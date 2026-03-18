import '@testing-library/jest-dom';

window.requestAnimationFrame = window.setTimeout;
window.cancelAnimationFrame = window.clearTimeout;

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
