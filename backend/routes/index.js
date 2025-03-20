const express = require("express");
const router = express.Router();

//Routes (Rota) alıyoruz.
const categoryRoute = require("./categories");

//Route yollarını tanımlıyoruz.
router.use("/categories",categoryRoute);

module.exports = router;