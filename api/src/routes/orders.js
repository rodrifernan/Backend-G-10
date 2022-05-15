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

router.get('/checkout', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const user = await User.findByPk(userId, {  attributes: {
      exclude: ['createdAt', 'updatedAt', 'userId', 'password', 'banned', 'roleId', 'id'],
    }, });

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
        const totalPage =
          dataValues.product.dataValues.price -
          (dataValues.product.dataValues.price *
            dataValues.product.dataValues.discount) /
            100;
        const subTotalItem = dataValues.product.dataValues.price * dataValues.quantity

        return {
          title     : dataValues.product.dataValues.name,
          price     : dataValues.product.dataValues.price,
          quantity  : dataValues.quantity,
          discount  : dataValues.product.dataValues.discount,
          subTotal  : subTotalItem,
          totalPage : totalPage,
          discountItem : subTotalItem-totalPage,
        };
      })      
    );

    res.send({shoppingCart, user});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
