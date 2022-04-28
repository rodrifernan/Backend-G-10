const axios = require('axios');
const {Router} = require('express');
const {Category} = require('../db') // traer mi modelo
const router = Router();

/* #### Backend 
   - [ ] __GET /categories__:
     - Obtener un listado de categorias
     - Debe devolver solo los datos necesarios para la ruta principal
*/
router.get('/', async (req, res, next) => {
      console.log('estoy BACK get __GET /categories__ ')
      try {   
          let getAllBdCategories = await Category.findAll({
        });
          return res.status(200).send(getAllBdCategories); 
    }catch(error) {next(error)}
})

module.exports = router;