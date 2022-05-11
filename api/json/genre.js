const { Genre } = require("../src/db");
const genreMockUp = async () => {
        try {
          await Genre.create({
            id   : '69cacb3c-4ef3-4d72-bbf3-d6618e450001',
            name: "Mujer",
          });

          await Genre.create({
            id   : '69cacb3c-4ef3-4d72-bbf3-d6618e450002',
            name: "Hombre",
          });
          await Genre.create({
            id   : '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
            name: "Unisex",
          });
          await Genre.create({
            id   : '69cacb3c-4ef3-4d72-bbf3-d6618e450004',
            name: "Todos",
          });


        } catch (err) {console.log(err.message);
  }
};

module.exports = genreMockUp;
