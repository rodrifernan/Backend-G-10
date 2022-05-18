const { User, Order, Product } = require('../db'); // traer mi modelo

const usersQuantity = async () => {
  const users = await User.findAll({
    where: { roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43' },
  });

  return users.length;
};

const ordersQuantity = async () => {
  const orders = await Order.findAll();

  return orders.length;
};

const salesQuantity = async () => {
  const sales = await Order.findAll();

  return sales.reduce((a, b) => a + b.total, 0).toFixed(2);
};

const lastOrders = async () => {
  const orders = await Order.findAll({
    limit: 5,
    order: [['createdAt', 'DESC']],
    attributes: ['orderNumber', 'orderDate', 'total', 'status'],
    include: [
      { model: Product, attributes: ['name', 'image'] },
      { model: User, attributes: ['firstName', 'lastName'] },
    ],
  });

  return orders;
};

const newProduct = async id => {
  const product = await Product.findAll({
    attributes: ['name', 'image', 'createdAt'],
    order: [['createdAt', 'DESC']],
    limit: 1,
  });

  return product[0];
};

module.exports = {
  usersQuantity,
  ordersQuantity,
  salesQuantity,
  lastOrders,
  newProduct,
};
