import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import onSubmitHandler from '../../utils/post-review';
import {
  createDetailTemplate,
  inputReview,
  createMenusListTemplate,
  createReviewsTemplate,
} from '../templates/template-creator';

const Detail = {
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

    // render favorite button
    FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('.favorite-button'),
      restaurant: {
        id: response.id,
        city: response.city,
        name: response.name,
        pictureId: response.pictureId,
        rating: response.rating,
        description: response.description,
      },
    });

    // insert foods & drinks list
    createMenusListTemplate({
      foodContainer: document.querySelector('.food'),
      drinkContainer: document.querySelector('.drink'),
      foods: response.menus.foods,
      drinks: response.menus.drinks,
    });

    // render form review's
    const inputReviewContainer = document.querySelector('.input-review-container');
    inputReviewContainer.innerHTML += inputReview();

    // insert and render reviews
    createReviewsTemplate({
      reviewsContainer: document.querySelector('.reviews-container'),
      reviews: response.customerReviews,
    });

    // when submit button clicked
    onSubmitHandler({
      inputNameElement: document.querySelector('#name-reviewer'),
      textareaReviewElement: document.querySelector('#review-text'),
      submitButtonELement: document.querySelector('.submit button'),
      restoId: response.id,
    });
  },
};

export default Detail;
