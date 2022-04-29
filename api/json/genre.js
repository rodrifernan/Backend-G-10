const { Genre } = require("../src/db");
const genreMockUp = async () => {
  try {
    await Genre.create({
      name: "women",
    });

    await Genre.create({
      name: "men",
    });
    await Genre.create({
      name: "unisex",
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = genreMockUp;
