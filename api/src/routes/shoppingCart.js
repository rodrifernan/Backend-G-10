const { Router } = require('express');
const { ShoppingCart, Product } = require('../db'); // traer mi modelo
const {loginVerification} = require('../middlewares/login');
const router = Router();

// Validators

/* #### Backend
    - [ ] __POST /user: */

router.get('/', loginVerification, async (req, res, next) => {
  try {
    const { id } = req.user;
    const shoppingCart = await ShoppingCart.findAll({
      where: {
        userId: id,
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
        const item = { ...dataValues, ...dataValues.product.dataValues };
        delete item.product;
        return item;
      })
    );

    res.send(shoppingCart);
  } catch (error) {
    next(error);
  }
});

router.post('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { productId, quantity } = req.body;

    await ShoppingCart.create({
      userId,
      productId,
      quantity,
    });

    res.status(201).send({ type: 'success', msg: 'Successfully created' });
  } catch (error) {
    next(error);
  }
});

router.delete('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id } = req.body;

    await ShoppingCart.destroy({ where: { userId, id } });

    res.status(200).send({ type: 'success', msg: 'Successfully delete' });
  } catch (error) {
    next(error);
  }
});

router.put('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id, quantity } = req.body;

    await ShoppingCart.update({ quantity }, { where: { userId, id } });

    res.status(200).send({ type: 'success', msg: 'Successfully update' });
  } catch (error) {}
});

module.exports = router;
