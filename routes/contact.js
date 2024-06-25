const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact");

// Route to handle contact form submission
router.post("/", contactController.submitForm);
router.get("/", contactController.getMessage);

module.exports = router;
