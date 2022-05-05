const { Router } = require('express');
const { Wishlist, Product } = require('../db'); // traer mi modelo
const loginVerification = require('../middlewares/loginVerification');
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

    await Wishlist.destroy({ where: { userId } });

    req.body.forEach(async ({ productId }) => {
      await Wishlist.create({
        userId,
        productId,
      });
    });

    res.status(201).send({ type: 'success', msg: 'Successfully created' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
