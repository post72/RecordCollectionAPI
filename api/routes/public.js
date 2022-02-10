const express = require("express");
const router = express.Router();
const publicData = require("../controllers/publicController");

router.get('/', publicData.index);
router.use('/ping', publicData.ping);

module.exports = router;