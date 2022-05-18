const axios = require('axios');
const { Router } = require('express');
const { Product, Category, Reviews, User } = require('../db'); // traer mi modelo
const router = Router();
const { Op } = require('sequelize');

/* #### Backend 
   - [ ] GET /filtercategory:
     - Obtener un listado de los productos
     - Debe devolver solo los datos necesarios para la ruta principal
   - [ ] GET /filtercategory?name="...":
     - Obtener un listado de los products por name
*/
router.get('/', async (req, res, next) => {
  let { name } = req.query;
  try {
    console.log('Estoy BACK get __GET /products Name ', req.query);
    let getAllBdProduct = await Product.findAll({
      where: { active: true },
      include: [
        Category,
        {
          model: Reviews,
          attributes: ['id', 'rating', 'comment', 'createdAt'],
          order: [['createdAt', 'DESC']],
          where: {
            finished: true,
          },
          required: false,
          include: {
            model: User,
            attributes: ['userName'],
          },
        },
      ], // name de la categoria relacionado a su categoryId
    });
    let aux = await getAllProduct(getAllBdProduct);

    const filter = aux.filter(e => e.category === name);
    console.log(filter);

    return res.send(filter);
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
      rating: elem.rating,
      warranty: elem.warranty,
      category: elem.category.name,
      reviews: elem.reviews,
    };
  });
  return getAllBdProduct1;
};

module.exports = router;
