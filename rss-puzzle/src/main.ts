import { renderPage } from './router';

// временно
// localStorage.setItem('userName', 'Pupa')

document.addEventListener('DOMContentLoaded', () => {
  renderPage(window.location.pathname);
});
