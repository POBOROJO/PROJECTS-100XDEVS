const { Router } = require("express");
const { Signup } = require("../controllers/userController");
const { Signin } = require("../controllers/userController");

const router = Router();

router.post("/signup", Signup);
router.post("/signin", Signin);

module.exports = router;
