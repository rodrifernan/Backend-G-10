const { ShoppingCart } = require('../src/db');
const shoppingCartMockUp = async () => {
  try {
    await ShoppingCart.create({
      quantity: 2,
      userId: 2,
      productId: 1,
    });

    await ShoppingCart.create({
      quantity: 1,
      userId: 2,
      productId: 3,
    });

    await ShoppingCart.create({
      quantity: 5,
      userId: 3,
      productId: 2,
    });

    await ShoppingCart.create({
      quantity: 7,
      userId: 3,
      productId: 4,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = shoppingCartMockUp;
