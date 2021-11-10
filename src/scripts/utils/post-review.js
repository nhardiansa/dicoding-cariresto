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

const onSubmitHandler = ({
  inputNameElement, textareaReviewElement, submitButtonELement, restoId,
}) => {
  const config = {
    userName: inputNameElement.value,
    reviewText: textareaReviewElement.value,
    restoId,
  };

  inputNameElement.addEventListener('change', (e) => {
    config.userName = e.target.value;
  });
  textareaReviewElement.addEventListener('change', (e) => {
    config.reviewText = e.target.value;
  });

  submitButtonELement.addEventListener('click', async (e) => {
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
};

export default onSubmitHandler;
