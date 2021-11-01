import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ hamburger, drawer, close }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._close = close;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      close: this._close,
      drawer: this._drawer,
    });
  }
}

export default App;
