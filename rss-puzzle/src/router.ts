import renderFooter from './components/footer/footer';
import renderHeader from './components/header/header';
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
      renderHeader();
      renderHomePage();
      renderFooter();
      break;
    case '/game':
      renderHeader();
      renderGamePage();
      renderFooter();
      break;
    default:
      renderHeader();
      renderNotFoundPage();
      renderFooter();
      break;
  }
}
