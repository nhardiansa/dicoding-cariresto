import API_ENPOINT from '../../globals/api-endpoints';

const createItemTemplate = (data) => {
  const desc = data.description.split(' ').slice(0, 50).join(' ')
  return (
    `
    <div class="card" tabindex="0">
      <img
        src="${API_ENPOINT.SMALL_IMAGE(data.pictureId)}"
        alt="${data.name}"
      />
      <div class="content">
        <div class="heading">
          <h2 aria-label="nama resto">${data.name}</h2>
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
}

export { createItemTemplate };
