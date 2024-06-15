const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  topic: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("contacts", ContactSchema);

module.exports = Contact;
