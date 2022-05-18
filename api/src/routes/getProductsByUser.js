const { Router } = require("express");
const router = Router();

const { loginVerification } = require("../middlewares/login");
const { User, Product, Category, Reviews } = require("../db");

router.get("/", loginVerification, async (req, res) => {
	const { id } = req.user;

	try {
		let products = await Product.findAll({
			where: {userId: id},
			include: [
				Category,
				{
					model: Reviews,
					where: {
						finished: true,
					},
					required: false,
					attributes: ['id', 'rating', 'comment', 'createdAt'],
					order: [['createdAt', 'DESC']],
					include: {
						model: User,
						attributes: ['userName'],
					},
				},
			], 
		});

		return res.status(200).send(products);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
});

module.exports = router;
