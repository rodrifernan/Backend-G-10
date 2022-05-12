const { Product_ShoppingCart } = require("../src/db");
const Product_ShoppingCartMockUp = async () => {
  try {
    await Category.create({
        ProductId      : '4841011e-fbf5-4c92-a770-3b06684f5891',
        ShoppingCartId : '62cacb3c-4ef3-4d72-bbf3-d6618e45a481',
    });
    await Category.create({
      id   : '62cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      name : "Belleza",
    });
    await Category.create({
      id   : '62cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      name : "Deporte",
    });
    await Category.create({
      id   : '62cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      name: "Mascosta",
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = Product_ShoppingCartMockUp;