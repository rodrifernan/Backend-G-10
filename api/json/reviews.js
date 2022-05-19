const { Reviews } = require('../src/db');
const reviewsMockUp = async () => {
  try {
    await Reviews.create({
      rating: 5,
      comment: 'Muy buen producto',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5894',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      finished: true,
    });

    await Reviews.create({
      rating: 2,
      comment: 'Buen producto',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5894',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      finished: true,
    });

    await Reviews.create({
      rating: 3,
      comment: 'Excelente producto',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5894',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      finished: true,
    });

    await Reviews.create({
      rating: 4,
      comment: '👍',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5894',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      finished: true,
    });


    await Reviews.create({
      productId: '4841011e-fbf5-4c92-a770-3b06684f5894',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
    });

    await Reviews.create({
      productId: '4841011e-fbf5-4c92-a770-3b06684f5892',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
    });



  } catch (err) {
    console.log(err.message);
  }
};
module.exports = reviewsMockUp;
