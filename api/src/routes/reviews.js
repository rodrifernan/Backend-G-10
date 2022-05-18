const { Router } = require('express');
const { Reviews, Product } = require('../db'); // traer mi modelo
const { loginVerification, rootVerification } = require('../middlewares/login');
const router = Router();

router.get('/user', loginVerification, async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const reviews = await Reviews.findAll({
      where: {
        userId,
        finished: false,
      },
      attributes: {
        exclude: ['userId', 'updatedAt', 'productId'],
      },

      include: {
        model: Product,
        attributes: ['name', 'image'],
      },
    });

    res.send(reviews);
  } catch (error) {
    next(error);
  }
});

router.post('/', loginVerification, async (req, res, next) => {
  try {
    const { id, comment, rating } = req.body;

    await Reviews.update(
      { comment, rating: rating ? rating : 1, finished: true },
      { where: { id } }
    );

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
