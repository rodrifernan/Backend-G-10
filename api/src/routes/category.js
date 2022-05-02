const axios = require('axios');
const {Router} = require('express');
const {Category} = require('../db') // traer mi modelo
const router = Router();

/* #### Backend 
    - [ ] __POST /category__:
    - Recibe los datos recolectados desde el formulario controlado de la ruta
      de creación del Categorias por body
    - Creacion de Categorias en la base de datos */
router.post('/', async (req, res, next) => {
      console.log('estoy BACK POST /category ', req.body)
      let {name} = req.body
      try {
          let postBdCategory = await Category.create({
              name
          })
          return res.status(200).send(postBdCategory)
    }catch(error) {next(error)}
})

module.exports = router;

