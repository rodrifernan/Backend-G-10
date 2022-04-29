const axios = require('axios');
const {Router} = require('express');
const {Product, Category,Reviews} = require('../db') // traer mi modelo
const router = Router();
const {Op} = require('sequelize');

/* #### Backend 
   - [ ] __GET /products__:
     - Obtener un listado de los productos
     - Debe devolver solo los datos necesarios para la ruta principal
   - [ ] __GET /products?name="..."__:
     - Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
     - Si no existe ninguna raza de perro mostrar un mensaje adecuado
*/
router.get('/', async (req, res, next) => {
  console.log('Estoy BACK get __GET /products__ ',req.query)
  let {name} = req.query
    try{
       if(!name){ // All records table if name is empty
         let getAllBdProduct = await Product.findAll({
             include: [Category, Reviews] // name de la categoria relacionado a su categoryId
         }) 
         return res.status(200).send(getAllBdProduct);
      }else { // Filter by name, name is not empty
         let getAllBdProduct = await Product.findAll({
             include: [Category, Reviews], // name de la categoria relacionado a su categoryId
             where:{name: {[Op.iLike] : `${name}%`}} // Filtra por name product
         }) 
         return res.status(200).send(getAllBdProduct);        
      }     
      }catch(error) {next(error)}
})

module.exports = router;