const { Router }  = require('express');
const products = require('./products');  // ruta get     
const categories = require('./categories');  // ruta get     
const product  = require('./product');   // ruta post    
const user = require('./user');
const genresFilter = require('./genre');

// mildelword
const router = Router();

//console.log(products) //

router.use('/products', products); 
router.use('/product', product); 
router.use('/categories',categories); 
router.use('/user', user);
router.use('/genresFilter', genresFilter); 

module.exports = router;