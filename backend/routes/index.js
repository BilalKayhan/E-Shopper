const express = require("express");
const router = express.Router();

//Routes (Rota) alıyoruz.
const categoryRoute = require("./categories");
const userRoute = require("./users");
const authRoute = require("./auth")

//Route yollarını tanımlıyoruz.
router.use("/categories",categoryRoute);
router.use("/users",userRoute);
router.use("/auth",authRoute);

module.exports = router;