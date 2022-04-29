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
     - Obtener un listado de los products
*/
router.get('/', async (req, res, next) => {
  //console.log('Estoy BACK get __GET /products__ ',req.query)
  let {name} = req.query
    try{
       if(!name){ // All records table if name is empty
         let getAllBdProduct = await Product.findAll({
             include: [Category, Reviews] // name de la categoria relacionado a su categoryId
         }) 
         return res.status(200).send(await getAllProduct(getAllBdProduct));
      }else { // Filter by name, name is not empty
        console.log('Estoy BACK get __GET /products Name ',req.query)
         let getAllBdProduct = await Product.findAll({
             include: [Category, Reviews], // name de la categoria relacionado a su categoryId
             where:{name: {[Op.iLike] : `${name}%`}} // Filtra por name product
         }) 

         //console.log(getAllBdProduct)

      

         return res.send(await getAllProduct(getAllBdProduct));
      }     
      }catch(error) {next(error)}
})

const getAllProduct = async (getAllBdProduct) => {
  const getAllBdProduct1 = getAllBdProduct.map((elem) =>{
    return {
      id          : elem.id,   
      description : elem.description,
      name        : elem.name,
      image       : elem.image,    
      price       : elem.price,   
      brand       : elem.brand,   
      genres      : elem.genre, 
      color       : elem.color, 
      discount    : elem.discount,
      stock       : elem.stock,
      rating      : elem.rating,
      warranty    : elem.warranty,
      category    : elem.category.name,
// <<<<<<< Modificacion-tabla-product
      reviews : elem.reviews.map(ele => ele.rating)
=======
//       reviews : elem.reviews[0].rating
// >>>>>>> master
  }})                
  return(getAllBdProduct1)
  
}

module.exports = router;