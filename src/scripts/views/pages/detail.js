const Favorite = {
  async render() {
    return `
      <h1 id="explore-header" tabindex="0">Detail</h1>
    `;
  },

  async afterRender() {
    console.log('detail');
  },
};

export default Favorite;
