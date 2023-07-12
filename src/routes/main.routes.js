const controladorMain = require("../controllers/mainControllers");

const express = require("express");
const router = express.Router();

router.get("/", controladorMain.home);
router.get("/elfbar", controladorMain.elfbar);
router.get("/oxbar", controladorMain.oxbar);

module.exports = router;
