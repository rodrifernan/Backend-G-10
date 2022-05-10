const { Router } = require('express');
const { Order, Product, User, ShoppingCart } = require('../db'); // traer mi modelo
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

router.post('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id } = req.body;

    const shoppingCart = await ShoppingCart.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
      include: {
        model: Product,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'reviewsId'],
        },
      },
    }).then(({ dataValues }) => {
      const item = { ...dataValues, ...dataValues.product.dataValues };
      delete item.product;
      return item;
    });

    const { discount, quantity, productId, price } = shoppingCart;

    await Order.create({
      total: quantity * (price - (price * discount) / 100),
      quantity,
      discount,
      productId,
      userId,
      unitPrice: price,
    });

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.get('/checkout', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const shoppingCart = await ShoppingCart.findAll({
      where: {
        userId,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
      include: {
        model: Product,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'reviewsId'],
        },
      },
    }).then(data =>
      data.map(({ dataValues }) => {
        const subTotal =
          dataValues.product.dataValues.price -
          (dataValues.product.dataValues.price *
            dataValues.product.dataValues.discount) /
            100;

        return {
          title: dataValues.product.dataValues.name,
          price: dataValues.product.dataValues.price,
          quantity: dataValues.quantity,
          discount: dataValues.product.dataValues.discount,
          subTotal,
          total: subTotal * dataValues.quantity,
        };
      })
    );

    res.send(shoppingCart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
