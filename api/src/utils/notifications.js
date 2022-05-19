const { User, Order, Product, Category } = require('../db'); // traer mi modelo
const { Sequelize } = require('sequelize');

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

const profitAmount = async () => {
  const sales = await Order.findAll();

  return (sales.reduce((a, b) => a + b.total, 0) * 0.02).toFixed(2);
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

const getRadarChar = async () => {
  const data = await Product.findAll({
    attributes: [[Sequelize.fn('sum', Sequelize.col('stock')), 'A']],
    include: { model: Category, attributes: ['name'] },
    group: ['product.categoryId', ['category.name']],
    raw: true,
  });

  const fullMark = Math.max(...[...data].map(item => Number(item.A)));

  return data.map(item => ({
    subject: item['category.name'],
    A: Number(item.A),
    fullMark,
  }));
};

const getPieChar = async () => {
  const data = await Product.findAll({
    attributes: [[Sequelize.fn('count', Sequelize.col('categoryId')), 'value']],
    include: { model: Category, attributes: ['name'] },
    group: ['product.categoryId', ['category.name']],
    raw: true,
  });

  return data.map(item => ({
    name: item['category.name'],
    value: Number(item.value),
  }));
};

const salesReport = async () => {
  const sales = await Order.findAll({
    attributes: [
      'orderDate',
      [Sequelize.fn('sum', Sequelize.col('total')), 'sumTotal'],
    ],
    group: ['orderDate'],
    order: [['orderDate', 'DESC']],
    raw: true,
  });

  return sales.map(item => ({
    date: item.orderDate,
    total: Number(item.sumTotal.toFixed(2)),
  }));
};

module.exports = {
  usersQuantity,
  ordersQuantity,
  salesQuantity,
  profitAmount,
  lastOrders,
  newProduct,
  getRadarChar,
  getPieChar,
  salesReport,
};
