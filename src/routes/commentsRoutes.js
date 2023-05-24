const express = require("express");
const commentsController = require("../controllers/commentsController");
const router = express.Router();

router.get("/", commentsController.getComments);

module.exports = router;
