const DrawerInitiator = {
  init({ hamburger, drawer, close }) {
    hamburger.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    close.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('unhide');
  },
};

export default DrawerInitiator;
