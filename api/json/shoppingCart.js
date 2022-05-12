const { ShoppingCart } = require('../src/db');
const shoppingCartMockUp = async () => {
  try {
    await ShoppingCart.create({
      id       : '76fb1991-c0b2-4d68-a7d6-c35df344c8ba',
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45a',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5892',
      quantity : 1,
    });

    await ShoppingCart.create({
      id       : '76fb1991-c0b2-4d68-a7d6-c35df344c8bb',
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5891',
      quantity : 1,
    });

    await ShoppingCart.create({
      id       : '76fb1991-c0b2-4d68-a7d6-c35df344c8bc',
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5893',
      quantity : 1,
    });

    await ShoppingCart.create({
      id       : '76fb1991-c0b2-4d68-a7d6-c35df344c8bd',
      userId   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a45d',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5891',
      quantity : 1,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = shoppingCartMockUp;
