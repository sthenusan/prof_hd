const express = require("express");
const router = express.Router();
const {
  add,
  subtract,
  multiply,
  divide,
  exponentiate,
  sqrt,
  modulo,
} = require("./calculator");

router.get("/add", add);
router.get("/subtract", subtract);
router.get("/multiply", multiply);
router.get("/divide", divide);
router.get("/exponentiate", exponentiate);
router.get("/sqrt", sqrt);
router.get("/modulo", modulo);

module.exports = router;
