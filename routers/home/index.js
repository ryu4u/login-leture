const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // 컨트롤러 역활

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

// router.get("/", (req, res) => {
//     res.render("home/index");
// });

// router.get("/login", (req, res) => {
//     res.render("home/login");
// });

module.exports = router;