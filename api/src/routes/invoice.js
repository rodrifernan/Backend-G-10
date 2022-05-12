const { Router } = require('express');
const { Invoice, ShoppingCart, Product, Order, User } = require('../db');
const router = Router();

const { loginVerification, rootVerification } = require('../middlewares/login');

/* #### Backend 
    - [ ] __POST /category__:
    - Recibe los datos recolectados desde el formulario controlado de la ruta
      de creación del Categorias por body
    - Creacion de Categorias en la base de datos */
router.post('/', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const invoice = await Invoice.create();

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
        const item = { ...dataValues, ...dataValues.product.dataValues };
        delete item.product;
        return item;
      })
    );

    shoppingCart.forEach(async ({ discount, quantity, productId, price }) => {
      await Order.create({
        total: quantity * (price - (price * discount) / 100),
        quantity,
        discount,
        productId,
        userId,
        unitPrice: price,
        invoiceId: invoice.id,
      });
    });

    await invoice.update({
      total: shoppingCart.reduce(
        (a, b) => a + b.quantity * (b.price - (b.price * b.discount) / 100),
        0
      ),
    });

    await invoice.save();

    res.status(201).send({ invoiceNumber: invoice.invoiceNumber });
  } catch (error) {
    next(error);
  }
});

router.get('/all', rootVerification, async (req, res, next) => {
  const allInvoices = await Invoice.findAll({
    attributes: {
      exclude: ['updatedAt'],
    },

    include: {
      model: Order,
      attributes: { exclude: ['id', 'updatedAt', 'invoiceId'] },
      include: [{ model: Product, attributes: ['name', 'userId'] }],
    },
  });

  res.send(allInvoices);
});

module.exports = router;