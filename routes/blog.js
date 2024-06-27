const express = require("express");
const router = express.Router();
const { JSDOM } = require("jsdom");
const Blog = require("../models/Blog"); // Corrected the import path
const multer = require("multer");
const path = require("path");
const fs = require("fs");

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

// Placeholder route to fetch all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().exec();
    if (!blogs || blogs.length === 0) {
      return res.status(404).json({ error: "No blogs available" });
    }
    return res.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Route to create a new blog post
router.post("/", upload.single("image"), async (req, res, next) => {
  try {
    const { title, content, author } = req.body;

    // Check if all required fields are provided
    if (!title || !content || !author || !req.file) {
      return res
        .status(400)
        .json({ error: "Title, content, author, and image are required" });
    }

    // Parse the content using JSDOM
    // const dom = new JSDOM(content);
    // const finalContent = dom.window.document.body.textContent || content;

    // Create a new blog post
    const newBlog = await Blog.create({
      title,
      content,
      author,
      img: `uploads/${req.file.filename}`, // Store the relative image path
    });

    return res.status(201).json({ message: "Blog post created successfully" });
  } catch (err) {
    console.error("Error creating blog post:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Route to delete a blog post by ID
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Remove the associated image file
    const imgPath = path.join(__dirname, "..", blog.img);
    if (fs.existsSync(imgPath)) {
      fs.unlinkSync(imgPath);
    }

    // Delete the blog post
    await Blog.findByIdAndDelete(req.params.id);

    return res.json({ message: "Blog post deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog post:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
