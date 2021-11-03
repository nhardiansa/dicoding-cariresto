import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Favorite = {
  async render() {
    return `
      <h1 id="explore-header" tabindex="0">Detail</h1>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.restaurantDetail(url.id);
    console.log(response);
  },
};

export default Favorite;
