import API_ENPOINT from '../../globals/api-endpoints';

const createItemTemplate = (data) => {
  let desc = data.description;
  desc = desc.split(' ').slice(0, 50).join(' ');
  return (
    `
    <div class="card" tabindex="0">
      <img
        src="${API_ENPOINT.SMALL_IMAGE(data.pictureId)}"
        alt="${data.name}"
      />
      <div class="content">
        <div class="heading">
          <h2 aria-label="nama resto">
            <a href="#/detail/${data.id}">
              ${data.name}
            </a>
          </h2>
          <div class="rating">
            <span class="material-icons" aria-label="rating"> grade </span>
            <p>${data.rating}</p>
          </div>
        </div>
        <div class="city">
          <span class="material-icons" aria-label="kota"> place </span>
          <p>${data.city}</p>
        </div>
        <p class="description">${desc}</p>
      </div>
    </div>
    `
  );
};

const createDetailTemplate = (data) => (
  `
    <div class="detail-container">
      <div class="image-container">
        <img src="https://restaurant-api.dicoding.dev/images/large/${data.pictureId}" alt="resto name" />
      </div>
      <div class="favorite-button"></div>
      <div class="desc-container">
        <div class="desc-section address">
          <span class="material-icons">storefront</span>
          <p>${data.address}</p>
        </div>
        <div class="desc-section city">
          <span class="material-icons">location_on</span>
          <p>${data.city}</p>
        </div>
        <div class="desc-section description">
          <p>${data.description}</p>
        </div>
      </div>
      <div class="menus">
        <div class="food-container">
          <div class="icon-heading">
            <span class="material-icons"> lunch_dining </span>
            <h4>Foods</h4>
          </div>
          <ul class="food"></ul>
        </div>
        <div class="drink-container">
          <div class="icon-heading">
            <span class="material-icons"> local_bar </span>
            <h4>Drinks</h4>
          </div>
          <ul class="drink"></ul>
        </div>
      </div>
      <div class="reviews">
        <div class="input-review-container">
          <h4>Bagaimana pendapatmu tentang ${data.name}?</h4>
        </div>
        <h4 class="reviews-heading">Pendapat orang-orang tentang ${data.name}</h4>
        <div class="reviews-container">
        </div>
      </div>
    </div>
  `
);

const reviewItemForDetail = (data) => (
  `
    <div class="review-item">
      <p class="name">${data.name}</p>
      <p class="date">${data.date}</p>
      <p class="review-text">${data.review}</p>
    </div>
  `
);

const inputReview = () => (
  ` 
    <form>
    <div class="inputer name">
      <label for="name-reviewer">Nama</label>
      <input type="text" id="name-reviewer" />
    </div>
    <div class="inputer review">
      <label for="review-text">Pendapatmu</label>
      <textarea name="review-text " id="review-text"></textarea>
    </div>
    <div class="inputer submit">
      <button type="submit">Send review</button>
    </div>
    </form>
  `
);

const createFavoriteButtonTemplate = () => (
  `
    <button id="favorite-button">
      <i class="far fa-star"></i>
      <span class"text-favorite">tambahkan ke favorit</span>
    </button>
  `
);

const createFavoritedButtonTemplate = () => (
  `
    <button id="favorite-button">
      <i class="fas fa-star"></i>
      <span class"text-favorite">hapus dari favorit</span>
    </button>
  `
);

const createMenusListTemplate = ({
  foodContainer, drinkContainer, foods, drinks,
}) => {
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
};

const createReviewsTemplate = ({ reviewsContainer, reviews }) => {
  reviews.forEach((el) => {
    const reviewItem = reviewItemForDetail(el);
    reviewsContainer.innerHTML += reviewItem;
  });
};

export {
  createItemTemplate,
  createDetailTemplate,
  reviewItemForDetail,
  inputReview,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createMenusListTemplate,
  createReviewsTemplate,
};
