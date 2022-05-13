const { Router } = require('express');
const { Order, Product } = require('../db'); // traer mi modelo
const { loginVerification, rootVerification } = require('../middlewares/login');
const router = Router();

router.get('/user', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const sales = await Order.findAll({
      where: {
        '$product.userId$': userId,
      },

      attributes: {
        exclude: ['updatedAt', 'productId', 'invoiceId', 'createdAt'],
      },

      include: {
        model: Product,
        attributes: ['name'],
      },
    });

    res.send(sales);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
