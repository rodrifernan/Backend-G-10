const { Wishlist } = require('../src/db');
const wishlistCartMockUp = async () => {
  try {
    await Wishlist.create({
      userId: 2,
      productId: 2,
    });

    await Wishlist.create({
      userId: 2,
      productId: 4,
    });

    await Wishlist.create({
      userId: 3,
      productId: 1,
    });

    await Wishlist.create({
      userId: 3,
      productId: 3,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = wishlistCartMockUp;
