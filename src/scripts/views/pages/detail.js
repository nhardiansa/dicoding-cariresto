import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailTemplate, reviewItemForDetail, inputReview } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h3 id="explore-header" tabindex="0"></h3>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.restaurantDetail(url.id);

    // change heading name
    const title = document.querySelector('#explore-header');
    title.innerHTML = response.name;

    // render detail
    const mainContainer = document.querySelector('#main');
    mainContainer.innerHTML += createDetailTemplate(response);

    // insert foods & drinks list
    const { foods, drinks } = response.menus;
    const foodContainer = document.querySelector('.food');
    const drinkContainer = document.querySelector('.drink');

    foods.forEach((el) => {
      const foodItem = document.createElement('li');
      foodItem.innerHTML = el.name;
      foodContainer.appendChild(foodItem);
    });
    drinks.forEach((el) => {
      const drinkItem = document.createElement('li');
      drinkItem.innerHTML = el.name;
      drinkContainer.appendChild(drinkItem);
    });

    // render input review's form
    const inputReviewContainer = document.querySelector('.input-review-container');
    inputReviewContainer.innerHTML += inputReview();

    // insert reviews
    const { customerReviews } = response;
    const reviewsContainer = document.querySelector('.reviews-container');

    customerReviews.forEach((el) => {
      const reviewItem = reviewItemForDetail(el);
      reviewsContainer.innerHTML += reviewItem;
    });
  },
};

export default Favorite;
