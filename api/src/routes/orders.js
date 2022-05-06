const { Router } = require('express');
const { Order, Product, User } = require('../db'); // traer mi modelo
const { loginVerification, rootVerification } = require('../middlewares/login');
const router = Router();

router.get('/', loginVerification, async (req, res, next) => {
  try {
    const { id } = req.user;

    const order = await Order.findAll({
      where: {
        userId: id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
      include: {
        model: Product,
        attributes: ['name', 'image'],
      },
    }).then(data =>
      data.map(({ dataValues }) => {
        const item = { ...dataValues, ...dataValues.product.dataValues };
        delete item.product;
        return item;
      })
    );

    res.send(order);
  } catch (error) {
    next(error);
  }
});

router.get('/all', rootVerification, async (req, res, next) => {
  try {
    const { id } = req.user;

    const order = await Order.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
      include: [
        { model: Product, attributes: ['name', 'image'] },
        {
          model: User,
          attributes: ['firstName', 'lastName', 'idPersonal'],
        },
      ],
    });

    res.send(order);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
