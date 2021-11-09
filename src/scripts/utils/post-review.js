import axios from 'axios';
import API_ENPOINT from '../globals/api-endpoints';

const sendReview = async ({ restoId, userName, reviewText }) => {
  try {
    const data = {
      id: restoId,
      name: userName,
      review: reviewText,
    };

    const response = await axios.post(API_ENPOINT.SEND_REVIEW, data);
    return response.data.error;
  } catch (err) {
    console.error(err);
    return true;
  }
};

export default sendReview;
