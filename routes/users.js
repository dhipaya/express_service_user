const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");


router.get("/get",ctrl.users.showAll);
router.get("/get/:index",ctrl.users.showOne);
router.post("/signup",ctrl.users.signup);
router.post("/login",ctrl.users.login);


module.exports = router;