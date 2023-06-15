const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");


router.get("/get",ctrl.personals.showAll);
router.get("/get/:index",ctrl.personals.showOne);
router.post("/register",ctrl.personals.registerPersonal);
router.post("/approve",ctrl.personals.approveAgent);
router.post("/unlock",ctrl.personals.unlockUser);



module.exports = router;