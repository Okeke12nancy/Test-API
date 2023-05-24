const express = require("express");
const postsController = require("../controllers/postsControllers");
const router = express.Router();

router.get("/", postsController.getPosts);

module.exports = router;
