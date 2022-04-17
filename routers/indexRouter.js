const router = require("express").Router();
const product = require("./ProductRouter");
const user = require("./UserRouter");
const categori = require("./CategorieRouter");
const order = require("./OrderRouter");

router.use("/products", product);
router.use("/users", user);
router.use("/categories", categori);
router.use("/orders", order);


module.exports = router;