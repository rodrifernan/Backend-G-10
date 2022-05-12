const { Router } = require('express');
const { Wishlist, Product } = require('../db'); // traer mi modelo
const {loginVerification} = require('../middlewares/login');
const router = Router();

// Validators

/* #### Backend
    - [ ] __POST /user: */

router.get('/', loginVerification, async (req, res, next) => {
  try {
    const { id } = req.user;
    const wishlist = await Wishlist.findAll({
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

    res.send(wishlist);
  } catch (error) {
    next(error);
  }
});

router.post('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { productId } = req.body;

    await Wishlist.create({
      userId,
      productId,
    });

    res.status(201).send({ type: 'success', msg: 'Successfully created' });
  } catch (error) {
    next(error);
  }
});

router.delete('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { productId } = req.body;

    await Wishlist.destroy({ where: { userId, productId } });

    res.send({ type: 'success', msg: 'Successfully deleted' });
  } catch (error) {
    next(error);
  }
});

router.delete('/clean', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    await Wishlist.destroy({ where: { userId } });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
