import { renderPage } from './router';

document.addEventListener('DOMContentLoaded', () => {
  renderPage(window.location.pathname);
});
