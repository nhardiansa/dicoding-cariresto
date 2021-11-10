import FavoriteRestoIdb from '../../data/database';
import { createItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h3 id="explore-header" tabindex="0">Resto Favoritmu</h3>
      <div class="resto-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.listResto();
    const restoListContainer = document.querySelector('.resto-list');

    if (restaurants.length === 0) {
      restoListContainer.className = 'favorite-list';
      restoListContainer.innerHTML = '<p class="no-item-display">Kamu tidak punya resto favorit</p>';
    }
    restaurants.forEach((restaurant) => {
      restoListContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Favorite;
