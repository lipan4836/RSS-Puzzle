import renderGamePage from './pages/game/game';
import renderHomePage from './pages/home/home';
import renderNotFoundPage from './pages/notFound/notFound';

export function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  renderPage(path);
}

window.onpopstate = () => {
  renderPage(window.location.pathname);
};

export function renderPage(path: string) {
  switch (path) {
    case '/':
      renderHomePage();
      break;
    case '/game':
      renderGamePage();
      break;
    default:
      renderNotFoundPage();
      break;
  }
}
