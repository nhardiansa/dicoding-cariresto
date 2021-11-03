import RestaurantSource from '../../data/restaurant-source';
import { createItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h1 id="explore-header" tabindex="0">Explore Resto</h1>
      <div class="resto-list"></div>
    `;
  },

  async afterRender() {
    const response = await RestaurantSource.restaurantList();
    const restoListContainer = document.querySelector('.resto-list');
    console.log(response);
    response.forEach((resto) => {
      restoListContainer.innerHTML += createItemTemplate(resto);
    });
  },
};

export default Home;
