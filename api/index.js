//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const categoryMockUp = require('./json/categories');
const productMockUp = require('./json/products');
const usersMockUp = require('./json/users');
const rolesMockUp = require('./json/roles');
const shoppingCartMockUp = require('./json/shoppingCart');
const wishlistCartMockUp = require('./json/wishlist');
const orderMockUp = require('./json/orders');
const genreMockUp = require('./json/genre');
const reviewsMockUp = require('./json/reviews');
const invoicesMockUp = require('./json/invoices');

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(async () => {
    await rolesMockUp();
    await usersMockUp();
    await genreMockUp();
    await categoryMockUp();
    await productMockUp();
    await reviewsMockUp();
    await wishlistCartMockUp();
    await shoppingCartMockUp();
    await invoicesMockUp();
    await orderMockUp();

    await server.listen(process.env.PORT, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  })
  .catch(e => console.log(e.message));
