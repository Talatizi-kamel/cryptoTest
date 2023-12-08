const express = require("express");
const router = express.Router();

const Userctrl = require("../controlleur/userControlleur");
router.post("/", Userctrl.login);
router.post("/", Userctrl.signin);

module.exports = router;
