const express = require("express");
const router = express.Router();
const protect = require("../middlewares/protect");

const { createGroup } = require("../controller/group");

router.post("/create-group", protect, createGroup);

module.exports = router;
