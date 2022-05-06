const { Order } = require('../src/db');
const orderMockUp = async () => {
  try {
    await Order.create({
      status: 'en almacen',
      purchased: true,
      userId: 2,
      productId: 2,
      quantity: 2,
      total: 100,
    });

    await Order.create({
      status: 'en camino',
      purchased: true,
      userId: 2,
      productId: 5,
      quantity: 5,
      total: 5.6,

    });

    await Order.create({
      status: 'Recibido',
      purchased: true,
      userId: 2,
      productId: 7,
      quantity: 2,
      total: 50,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = orderMockUp;
