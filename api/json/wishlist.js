const { Wishlist } = require('../src/db');
const wishlistCartMockUp = async () => {
  try {
    await Wishlist.create({
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5891',
    });

    await Wishlist.create({
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5891',
    });

    await Wishlist.create({
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5891',
    });

    await Wishlist.create({
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5891',
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = wishlistCartMockUp;
