import renderHeader from './components/header/header';
import { renderPage } from './router';

// временно
// localStorage.setItem('userName', 'Pupa')

renderHeader();

document.addEventListener('DOMContentLoaded', () => {
  renderPage(window.location.pathname);
});
