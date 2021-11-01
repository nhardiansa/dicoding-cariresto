const Favorite = {
  async render() {
    return `
      <h1 id="explore-header" tabindex="0">Resto Favoritmu</h1>
    `;
  },

  async afterRender() {
    console.log('fav page');
  },
};

export default Favorite;
