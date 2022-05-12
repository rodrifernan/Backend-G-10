const { Router } = require("express");
const router = Router();

const { loginVerification } = require("../middlewares/login");
const { User, Product } = require("../db");

router.get("/", loginVerification, async (req, res) => {
	const { id } = req.user;

	try {
		const productsByUser = await User.findByPk(id, {
			include: Product,
		});

		return res.status(200).send(productsByUser.products);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
});

module.exports = router;
