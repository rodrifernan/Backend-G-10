const { ShoppingCart } = require('../src/db');
const shoppingCartMockUp = async () => {
  try {
    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5896',
      quantity: 2,
    });
    
    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: '5b7122b7-8134-41ac-8cad-36bec8d9f0f8',
      quantity: 1,
    });

    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: 'ec921f90-048e-4477-9112-db8a5666976b',
      quantity: 5,
    });

    await ShoppingCart.create({
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: 'b2d8f1c1-c7cf-49c7-8b77-73f0562809e0',
      quantity: 7,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = shoppingCartMockUp;
