const Home = {
  async render() {
    return `
      <h1 id="explore-header" tabindex="0">Explore Resto</h1>
    `;
  },

  async afterRender() {
    console.log('ini home');
  },
};

export default Home;
