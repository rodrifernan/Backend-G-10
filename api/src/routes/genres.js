const axios = require("axios");
const { Router } = require("express");
const { Product, Category, Reviews, Genre } = require("../db"); // traer mi modelo
const router = Router();
const { Op } = require("sequelize");

/* #### Backend 
   - [ ] GET /genres:
   . Obtener un listado de genneros
*/
router.get('/', async (req, res, next) => {
  console.log('estoy BACK get __GET /genres__ ')
  try {   
      let getAllBdGenres = await Genre.findAll({
    });
      return res.status(200).send(getAllBdGenres); 
}catch(error) {next(error)}
})

module.exports = router;

