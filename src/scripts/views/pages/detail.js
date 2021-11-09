import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import sendReview from '../../utils/post-review';
import { createDetailTemplate, reviewItemForDetail, inputReview } from '../templates/template-creator';

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

    // when submit button clicked
    const sendReviewButton = document.querySelector('.submit button');
    const inputName = document.querySelector('#name-reviewer');
    const textareaReview = document.querySelector('#review-text');
    const restoId = response.id;

    const config = {
      userName: inputName.value,
      reviewText: textareaReview.value,
      restoId,
    };

    inputName.addEventListener('change', (e) => {
      config.userName = e.target.value;
    });
    textareaReview.addEventListener('change', (e) => {
      config.reviewText = e.target.value;
    });

    sendReviewButton.addEventListener('click', async (e) => {
      e.preventDefault();
      // console.log(config);
      const responseMessage = await sendReview({
        restoId,
        userName: config.userName,
        reviewText: config.reviewText,
      });

      if (!responseMessage) {
        alert('data berhasil ditambahkan, silahkan refresh halaman untuk melihat review anda kembali');
      } else {
        alert(`
        terdapat kesalahan dalam menambahkan review
        ${JSON.stringify(responseMessage)}
        `);
      }
    });
  },
};

export default Detail;
