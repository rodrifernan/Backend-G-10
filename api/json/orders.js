const { Order } = require('../src/db');
const orderMockUp = async () => {
  try {
    await Order.create({
      status: 'en almacen',
      purchased: true,
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '4841011e-fbf5-4c92-a770-3b06684f5896',
      quantity: 2,
      total: 100,
    });

    await Order.create({
      status: 'en camino',
      purchased: true,
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: '5b7122b7-8134-41ac-8cad-36bec8d9f0f8',
      quantity: 5,
      total: 5.6,

    });

    await Order.create({
      status: 'Recibido',
      purchased: true,
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      productId: 'b2d8f1c1-c7cf-49c7-8b77-73f0562809e0',
      quantity: 2,
      total: 50,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = orderMockUp;
