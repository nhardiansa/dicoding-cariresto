import CONFIG from './config';

const API_ENPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SMALL_IMAGE: (imageId) => `${CONFIG.BASE_IMAGE}small/${imageId}`,
  SEND_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENPOINT;
