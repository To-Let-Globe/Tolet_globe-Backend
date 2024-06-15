const Contact = require("../models/contact.jsx");

const getMessage = async (req, res, next) => {
  try {
    const message = await Contact.find().exec();
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const submitForm = async (req, res, next) => {
  try {
    const { topic, name, email, message } = req.body;

    // Basic validations
    if (!topic || !name || !email || !message) {
      return res.status(400).json({
        message: "Topic, name, email, and message are required fields",
      });
    }
    // Create a new contact instance
    const newContact = new Contact({
      topic,
      name,
      email,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  submitForm,
  getMessage,
};
