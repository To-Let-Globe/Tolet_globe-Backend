const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const Commet = require("../models/Commet");
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

// Create a new property
router.post("/", upload.array("image", 10), async (req, res) => {
  try {
    // Collect filenames of the uploaded files
    const images = req.files.map((file) => `uploads/${file.filename}`);

    const propertyData = {
      ...req.body,
      img: images, // Adjust the key to match your Property model
    };

    const property = new Property(propertyData);
    const savedProperty = await property.save();

    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new comment
router.post(
  "/commets/:propertyid",
  upload.single("image"),
  async (req, res) => {
    try {
      const commetData = {
        ...req.body,
        property_id: req.params.propertyid,
        img: `uploads/${req.file.filename}`,
      };
      const commet = new Commet(commetData);
      const savedCommet = await commet.save();
      res.status(201).json(savedCommet);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// Delete a comment by ID
router.delete("/commets/:commetid", async (req, res) => {
  try {
    const deletedCommmit = await Commet.findByIdAndDelete(req.params.commetid);
    if (!deletedCommmit) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const imgPath = path.join(__dirname, "..", deletedCommmit.img);
    if (fs.existsSync(imgPath)) {
      fs.unlinkSync(imgPath);
    }

    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get properties by locality
router.get("/locality/:locality", async (req, res) => {
  try {
    const properties = await Property.find({ Locality: req.params.locality });
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a property by ID
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    const commets = await Commet.find({ property_id: req.params.id });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({ property, commets });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a property by ID
router.put("/:id", upload.array("image", 10), async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Collect filenames of the uploaded files
    const newImages = req.files.map((file) => `uploads/${file.filename}`);

    // Merge new images with existing images
    const updatedImages = [...property.img, ...newImages];

    // Update the property data
    const updatedPropertyData = {
      ...req.body,
      img: updatedImages,
    };

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      updatedPropertyData,
      { new: true }
    );

    res.json(updatedProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a property by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    const deletedComments = await Commet.deleteMany({
      property_id: req.params.id,
    });

    // Delete the property images
    if (deletedProperty.img && deletedProperty.img.length > 0) {
      deletedProperty.img.forEach((imagePath) => {
        const fullImagePath = path.join(__dirname, "..", imagePath);
        if (fs.existsSync(fullImagePath)) {
          fs.unlinkSync(fullImagePath);
        }
      });
    }

    // Delete images associated with comments
    if (deletedComments.length > 0) {
      deletedComments.forEach((comment) => {
        if (comment.img && comment.img.length > 0) {
          comment.img.forEach((imagePath) => {
            const fullImagePath = path.join(__dirname, "..", imagePath);
            if (fs.existsSync(fullImagePath)) {
              fs.unlinkSync(fullImagePath);
            }
          });
        }
      });
    }

    res.json({ message: "Property and associated comments deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

