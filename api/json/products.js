const { Product } = require("../src/db");
const productMockUp = async () => {
  try {
    await Product.create({
      name: "PC HP", //name: "Headphones",
      price: 300,
      // newItem: false,
      brand: "Samsung",
      color: "red",
      warranty: 3,
      discount: 2,
      image: [
        "https://picsum.photos/300",
        "https://picsum.photos/300",
      ],
      stock: 50,
      description:'asdasfasgfagasfgasfasfasfasfsafas',
      // rating: 0,
      brand: 1,
      categoryId: 1,
      reviewsId:1,
      genresId:1,
    });
    await Product.create({
      name: "PC MASTER",
      price: 500,
      // newItem: false,
      brand: "Samsung",
      color: "BLACK",
      warranty: 1,
      discount: 30,
      image: [
        "https://picsum.photos/300",
        "https://picsum.photos/300",
      ],
      stock: 20,
      description:'54654894131646431264',
      // rating: 0,
      brand: 1,
      categoryId: 2,
      reviewsId:1,
      genresId:2,
    });

    await Product.create({
      name: "Dog",
      price: 500,
      // newItem: false,
      brand: "pepito",
      color: "BLACK",
      warranty: 1,
      discount: 30,
      image: [
        "https://picsum.photos/300",
        "https://picsum.photos/300",
      ],
      stock: 20,
      description:'hermoso regalo para tu perro',
      // rating: 0,
      brand: 1,
      categoryId: 3,
      reviewsId:1,
      genresId:3,
    });

    await Product.create({
      name: "Espejo",
      price: 500,
      // newItem: false,
      brand: "Generica",
      color: "BLACK",
      warranty: 1,
      discount: 30,
      image: [
        "https://picsum.photos/300",
        "https://picsum.photos/300",
      ],
      stock: 20,
      description:'Espejo con zoom',
     
      brand: 1,
      categoryId: 4,
      reviewsId:1,
      genresId:1,
    });
   
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = productMockUp;
