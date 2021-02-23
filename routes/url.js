const express = require("express");
const urlController = require("../controllers/urlController");

const router = express.Router();

router.post("/", urlController.shortUrl);
router.get("/:shortUrl", urlController.getShortenedUrl);

module.exports = router;
