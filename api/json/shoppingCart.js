const { ShoppingCart } = require('../src/db');
const shoppingCartMockUp = async () => {
  try {
    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5892',
      quantity: 2,
    });
    
    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5892',
      quantity: 1,
    });

    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5892',
      quantity: 5,
    });

    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5892',
      quantity: 7,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = shoppingCartMockUp;
