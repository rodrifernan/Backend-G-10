const { Router } = require('express');
const { Op } = require('sequelize');
const {
  Invoice,
  ShoppingCart,
  Product,
  Order,
  User,
  Reviews,
} = require('../db');
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

    const reviews = [];

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
      const order = await Order.create({
        total: quantity * (price - (price * discount) / 100),
        quantity,
        discount,
        productId,
        userId,
        unitPrice: price,
        invoiceId: invoice.id,
      });

      const product = await Product.findByPk(order.productId);

      await product.update({ stock: product.stock - quantity });
      product.save();
    });

    await invoice.update({
      total: shoppingCart.reduce(
        (a, b) => a + b.quantity * (b.price - (b.price * b.discount) / 100),
        0
      ),
    });

    await invoice.save();

    for (let i = 0; i < shoppingCart.length; i++) {
      const review = await Reviews.create({
        userId,
        productId: shoppingCart[i].productId,
      });
      reviews.push(review);
    }

    res.status(201).send({ invoice, reviews });
  } catch (error) {
    next(error);
  }
});

router.get('/all', rootVerification, async (req, res, next) => {
  try {
    const allInvoices = await Invoice.findAll({
      attributes: {
        exclude: ['updatedAt'],
      },

      include: {
        model: Order,
        attributes: {
          exclude: [
            'id',
            'updatedAt',
            'invoiceId',
            'createdAt',
            'orderNumber',
            'orderDate',
            'purchased',
            'status',
          ],
        },
        include: [{ model: Product, attributes: ['name', 'userId'] }],
      },
    }).then(async invoices => {
      const response = [];

      for (let i = 0; i < invoices.length; i++) {
        if (invoices[i].dataValues.orders.length) {
          const user = await User.findByPk(
            invoices[i].dataValues.orders[0].dataValues.userId,
            {
              attributes: [
                'id',
                'userName',
                'firstName',
                'lastName',
                'idPersonal',
                'phone',
                'address',
              ],
            }
          );
          response.push({ ...invoices[i].dataValues, user });
        }
      }
      return response;
    });

    res.send(allInvoices);
  } catch (error) {
    next(error);
  }
});

router.get('/user', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const invoices = await Invoice.findAll({
      where: {
        '$orders.userId$': userId,
      },

      attributes: {
        exclude: ['updatedAt'],
      },

      include: {
        model: Order,
        attributes: {
          exclude: [
            'id',
            'updatedAt',
            'invoiceId',
            'createdAt',
            'orderNumber',
            'orderDate',
            'purchased',
            'status',
          ],
        },
        include: [{ model: Product, attributes: ['name', 'userId'] }],
      },
    });

    res.send(invoices);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
