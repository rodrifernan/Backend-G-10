const { Reviews } = require("../src/db");
const reviewsMockUp = async () => {
  try {
    
    await Reviews.create({
      id        : '69cacb3c-4ef3-4d72-bbf3-d6618e800001',
      rating    : 1,
      comment   : 'Muy bien producto 01',
//      productId : '4841011e-fbf5-4c92-a770-3b06684f5891',
    });

     await Reviews.create({
       id        : '69cacb3c-4ef3-4d72-bbf3-d6618e800002',
       rating    : 2,
       comment   : 'kafhkjasnfkasnfkjashfknasfnaskjfnas',
  //     productId :  '4841011e-fbf5-4c92-a770-3b06684f5891',
     });

    await Reviews.create({
      id       : '69cacb3c-4ef3-4d72-bbf3-d6618e800003',
      rating   : 2,
      comment  : 'kafhkjasnfkasnfkjashfknasfnaskjfnas',
    //  productId: '4841011e-fbf5-4c92-a770-3b06684f5891',
    });

    await Reviews.create({
      id   : '69cacb3c-4ef3-4d72-bbf3-d6618e800004',
      rating: 2,
      comment: 'kafhkjasnfkasnfkjashfknasfnaskjfnas',
      //productId: '69cacb3c-4ef3-4d72-bbf3-d6618e800001',,
    });

    
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = reviewsMockUp;
