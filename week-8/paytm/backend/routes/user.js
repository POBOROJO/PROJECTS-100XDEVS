const { Router } = require("express");
const { Signup } = require("../controllers/signUpController");

const router = Router();

router.post("/signup", Signup);
router.post("/signin");

module.exports = router;
