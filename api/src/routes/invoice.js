const { Router } = require('express');
const { Invoice, ShoppingCart, Product, Order } = require('../db');
const router = Router();

const { loginVerification } = require('../middlewares/login');

/* #### Backend 
    - [ ] __POST /category__:
    - Recibe los datos recolectados desde el formulario controlado de la ruta
      de creación del Categorias por body
    - Creacion de Categorias en la base de datos */
router.post('/', loginVerification, async (req, res, next) => {
  console.log('estoy BACK POST /category ', req.body);
  try {
    const { id: userId } = req.user;

    const invoice = await Invoice.create();
   
    console.log(invoice);

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

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
