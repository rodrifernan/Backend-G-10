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


const categoryMockUp = require("./json/categories");
const productMockUp = require("./json/products");
const reviewMockUp = require("./json/reviews");
const usersMockUp = require("./json/users");
const rolesMockUp = require("./json/roles");
const shoppingCartMockUp = require("./json/shoppingCart");
const wishlistCartMockUp = require("./json/wishlist");

// Syncing all the models at once.
conn.sync({ force: true })
.then(async() => {

  await categoryMockUp();
  await productMockUp();
  await reviewMockUp();
  await rolesMockUp();
  await usersMockUp();
  await shoppingCartMockUp();
  await wishlistCartMockUp();

  await server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
})
.catch((e) => console.log(e.message));