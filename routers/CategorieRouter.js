const { get, getById, create, update, distroy } = require("../controllers/CategorieController");
const router = require("express").Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", distroy);

module.exports = router;