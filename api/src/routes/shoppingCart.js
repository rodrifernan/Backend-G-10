const { Router } = require('express');
const { ShoppingCart, Product } = require('../db'); // traer mi modelo
const { loginVerification } = require('../middlewares/login');
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
        const productRow = dataValues.product.dataValues;
        productRow.productId = productRow.id;
        delete productRow.id;

        const item = { ...dataValues, ...productRow };
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
    const { productId } = req.body;

    const product = await ShoppingCart.findOne({
      where: { userId, productId },
    });

    if (product) {
      const productDetails = await Product.findByPk(productId);
      await product.update({
        quantity:
          product.quantity + 1 > productDetails.stock
            ? product.quantity
            : product.quantity + 1,
      });
      await product.save();
    } else {
      await ShoppingCart.create({
        userId,
        productId,
        quantity: 1,
      });
    }

    res.status(201).send({ type: 'success', msg: 'Successfully' });
  } catch (error) {
    next(error);
  }
});

router.delete('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id } = req.body;

    await ShoppingCart.destroy({ where: { userId, id } });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.delete('/clean', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    await ShoppingCart.destroy({ where: { userId } });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.put('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id, quantity } = req.body;

    await ShoppingCart.update({ quantity }, { where: { userId, id } });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.post('/guest', async (req, res, next) => {
  try {
    const list = req.body;

    const data = [];

    for (let i = 0; i < list.length; i++) {
      const details = await Product.findByPk(list[i].productId, {
        attributes: ['id', 'name', 'discount', 'image', 'price', 'stock'],
      }).then(({ dataValues }) => dataValues);

      data.push({ ...list[i], ...details });
    }

    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.post('/addGuest', loginVerification, async (req, res) => {
  try {
    const { id: userId } = req.user;
    const list = req.body;

    list.forEach(async ({ productId, quantity }) => {
      const product = await ShoppingCart.findOne({
        where: { userId, productId },
      });

      if (product) {
        await product.update({ quantity: product.quantity + quantity });
        await product.save();
      } else {
        await ShoppingCart.create({
          userId,
          productId,
          quantity,
        });
      }
    });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
