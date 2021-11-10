import FavoriteRestoIdb from '../data/database';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ buttonContainer, restaurant }) {
    this._buttonContainer = buttonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestoIdb.getResto(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._buttonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._buttonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
