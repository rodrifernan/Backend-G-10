const { Reviews } = require("../src/db");
const reviewsMockUp = async () => {
  try {
    
    await Reviews.create({
      rating: 1,
      comment: 'kafhkjasnfkasnfkjashfknasfnaskjfnas',
      productId: 1,
    });
    await Reviews.create({
      rating: 2,
      comment: 'kafhkjasnfkasnfkjashfknasfnaskjfnas',
      productId: 2,
    });

    
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = reviewsMockUp;
