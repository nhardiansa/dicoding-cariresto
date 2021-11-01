import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/drawer.css';
import '../styles/hero.css';
import '../styles/main_contents.css';

// import './script';

import App from './views/app';

const app = new App({
  hamburger: document.querySelector('.hamburger'),
  close: document.querySelector('.close'),
  drawer: document.querySelector('.drawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
