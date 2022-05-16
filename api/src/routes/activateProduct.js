const { Router } = require('express');
const { Product } = require('../db'); // traer mi modelo
const router = Router();

/* #### Backend
    - [ ] __POST /activateProduct: el admin activa el producto para su compra o venta*/
router.put('/', async (req, res, next) => {
  console.log('estoy BACK get __GET / activateProduct__ ', req.body)
  const {id} = req.body
  try {
    const product = await Product.findByPk(id) 
    await product.update({ active: product.active ? false: true})
    return res.status(201).send({msg: 'Registro Actualizado' })
  } catch (error) {
    next(error);
  }
});

module.exports = router;
