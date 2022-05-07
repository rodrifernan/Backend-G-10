var uuid = require('node-uuid');
//import { uuid } from 'uuidv4';
//const uuid = require('uuid/v4'); // ES5
//import uuid from 'uuid/v4'
const axios = require("axios");
const { Router } = require("express");
const { Product, Category, Reviews, Genre } = require("../db"); // traer mi modelo
const router = Router();
const { Op } = require("sequelize");

/* #### Backend - [ ] GET /editProduct:*/
router.get("/", async (req, res, next) => {
    console.log("Estoy BACK get __GET /editProduct", req.query);
    let { id } = req.query;
    const ProductFindByPk = await Product.findByPk(id, {
    include:  [Category, Reviews, Genre] // Me trae todas las actividades relcionadas con el id del pais
    });
    return res.send(ProductFindByPk);
});

module.exports = router
