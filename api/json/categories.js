const { Category } = require("../src/db");
const categoryMockUp = async () => {
  try {
    await Category.create({
      name: "Electronic",
    });


    await Category.create({
      name: "Beauty",
    });
    await Category.create({
      name: "Sports",
    });
    await Category.create({
      name: "Pets",
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = categoryMockUp;
