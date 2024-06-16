const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact");

// Route to handle contact form submission
router.post("/contact", contactController.submitForm);
router.get("/contact", contactController.getMessage);

module.exports = router;
