const express = require("express");
const Blog = require("../models/Blog"); // Corrected the import path
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Route to create a new blog post with image upload to Cloudinary
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Check if all required fields are provided
    if (!title || !content || !author || !req.file) {
      return res
        .status(400)
        .json({ error: "Title, content, author, and image are required" });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads", // Optional: specify folder in Cloudinary
      transformation: [
        { width: 300, height: 300, crop: "fill" }, // Example transformation: resize and crop to 500x500
        { fetch_format: "auto", quality: "auto" }, // Example optimization: auto format and quality
      ],
    });

    // Create a new blog post with Cloudinary URL
    const newBlog = new Blog({
      title,
      content,
      author,
      img: uploadResult.secure_url, // Store Cloudinary URL
    });

    // Save blog post to MongoDB
    await newBlog.save();

    // Remove uploaded file from local storage
    fs.unlinkSync(req.file.path);

    return res
      .status(201)
      .json({ message: "Blog post created successfully", blog: newBlog });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    // Fetch all blogs from the database
    const blogs = await Blog.find();

    // Respond with the fetched blogs as JSON
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
