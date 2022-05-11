const axios = require('axios');
const { Router } = require('express');
const { Product } = require('../db'); // traer mi modelo
const router = Router();
const { loginVerification } = require('../middlewares/login');
//const {} = require('./utiles');

/* #### Backend 
    - [ ] __POST /product__:
    - Recibe los datos recolectados desde el formulario controlado de la ruta
      de creación del producto por body
    - Crea un producto en la base de datos */
router.post('/', loginVerification, async (req, res, next) => {
  console.log('estoy BACK POST /product', req.body);

  const { id: userId } = req.user;

  let {
    name,
    description,
    price,
    brand,
    color,
    warranty,
    image,
    discount,
    stock,
    categoryId,
    genreId,
  } = req.body;
  try {
    let postBdProduct = await Product.create({
      name,
      description,
      price,
      brand,
      color,
      warranty,
      image,
      discount,
      stock,
      categoryId,
      genreId,
      userId,
    });
    //return res.send(await postBdProduct.setCategory(categoryId));
    return res.status(200).send(postBdProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
