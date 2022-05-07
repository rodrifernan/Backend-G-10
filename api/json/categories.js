const { Category } = require("../src/db");
const categoryMockUp = async () => {
  try {
    await Category.create({
      id   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      name : "Electronica",
    });
    await Category.create({
      id   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      name : "Belleza",
    });
    await Category.create({
      id   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      name : "Deporte",
    });
    await Category.create({
      id   : '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      name: "Mascosta",
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = categoryMockUp;
