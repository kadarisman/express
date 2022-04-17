const { get, getByid, create, update, distroy } = require("../controllers/UserController");
const router = require("express").Router();

router.get("/", get);
router.get("/:id", getByid);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", distroy);

module.exports = router;