const { Router } = require("express");
const { Genre } = require("../db"); // traer mi modelo
const router = Router();

/* #### Backend 
    - [ ] __POST /genre__:
    - Recibe los datos recolectados desde el formulario controlado de la ruta
      de creación del Generos por body */

router.post("/", async (req, res, next) => {
	console.log("estoy BACK POST /genre ", req.body);
	let { name } = req.body;
	try {
		let postBdGenre = await Genre.create({
			name,
		});
		return res.status(200).send(postBdGenre);
	} catch (error) {
		next(error);
	}
});
module.exports = router;
