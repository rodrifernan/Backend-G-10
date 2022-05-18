const axios = require('axios');
const { Router } = require('express');
const { Product, Category, Reviews, User } = require('../db'); // traer mi modelo
const router = Router();
const { Op } = require('sequelize');

/* #### Backend 
   - [ ] __GET /products__:
     - Obtener un listado de los productos
     - Debe devolver solo los datos necesarios para la ruta principal
   - [ ] __GET /products?name="..."__:
     - Obtener un listado de los products por name
*/
router.get('/', async (req, res, next) => {
  //console.log('Estoy BACK get __GET /products__ ',req.query)
  let { name } = req.query;
  try {
    if (!name) {
      // All records table if name is empty
      let getAllBdProduct = await Product.findAll({
        where: { active: true },

        include: [
          Category,
          {
            model: Reviews,
            where: {
              finished: true,
            },
            required: false,
            attributes: ['id', 'rating', 'comment', 'createdAt'],
            order: [['createdAt', 'DESC']],
            include: {
              model: User,
              attributes: ['userName'],
            },
          },
        ],
      });
      return res.status(200).send(await getAllProduct(getAllBdProduct));
    } else {
      console.log('Estoy BACK get __GET /products Name ', req.query);
      let getAllBdProduct = await Product.findAll({
        where: {
          active: true,
          name: { [Op.iLike]: `%${name}%` },
        },
        include: [
          Category,
          {
            model: Reviews,
            where: {
              finished: true,
            },
            required: false,
            attributes: ['id', 'rating', 'comment', 'createdAt'],
            order: [['createdAt', 'DESC']],
            include: {
              model: User,
              attributes: ['userName'],
            },
          },
        ],
      });
      return res.send(await getAllProduct(getAllBdProduct));
    }
  } catch (error) {
    next(error);
  }
});

const getAllProduct = async getAllBdProduct => {
  const getAllBdProduct1 = getAllBdProduct.map(elem => {
    return {
      id: elem.id,
      description: elem.description,
      name: elem.name,
      image: elem.image,
      price: elem.price,
      brand: elem.brand,
      genres: elem.genre,
      color: elem.color,
      discount: elem.discount,
      stock: elem.stock,
      warranty: elem.warranty,
      category: elem.category.name,
      reviews: elem.reviews,
      active: elem.active
    };
  });
  return getAllBdProduct1;
};

module.exports = router;
