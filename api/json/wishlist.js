const { Wishlist } = require('../src/db');
const wishlistCartMockUp = async () => {
  try {
    await Wishlist.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5896',
    });

    await Wishlist.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: '5b7122b7-8134-41ac-8cad-36bec8d9f0f8',
    });

    await Wishlist.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: 'ec921f90-048e-4477-9112-db8a5666976b',
    });

    await Wishlist.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: 'b2d8f1c1-c7cf-49c7-8b77-73f0562809e0',
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = wishlistCartMockUp;
