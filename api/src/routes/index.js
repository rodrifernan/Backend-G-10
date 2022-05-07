const { Router } = require('express');
const products = require('./products');
const category = require('./category');
const categories = require('./categories');
const product = require('./product');
const user = require('./user');
const filtercategory = require('./filtercategory');
const genresFilter = require('./genre');
const login = require('./login');
const shoppingCart = require('./shoppingCart');
const wishlist = require('./wishlist');
const productById = require('./productById');
const orders = require('./orders');
const checkout       = require('./checkout');   // chequear pago
const paymentIdPM    = require('./paymentIdPM');  // buscar la orden de pago compra ver items
const editProduct    = require('./editProduct');  // buscar la orden de pago compra ver items

// mildelword
const router = Router();

//console.log(products) //

router.use('/products', products);
router.use('/product', product);
router.use('/categories', categories);
router.use('/category', category);
router.use('/user', user);
router.use('/filtercategory', filtercategory);
router.use('/genresFilter', genresFilter);
router.use('/login', login);
router.use('/shoppingCart', shoppingCart);
router.use('/wishlist', wishlist);
router.use('/productId', productById);
router.use('/orders', orders);
router.use('/checkout', checkout);
router.use('/paymentIdPM', paymentIdPM);
router.use('/editProduct', editProduct);


module.exports = router;
