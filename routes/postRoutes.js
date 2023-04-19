const express = require("express");
const router = express.Router();
const postController = require("../controllers/index");

router.get("/", postController.getAllPosts);
router.post("/", postController.createNewPost);
router.get("/:id", postController.getPostById);

module.exports = router;
