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
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const propertyData = {
      ...req.body,
      img: `uploads/${req.file.filename}`,
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
router.put("/:id", async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
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

    const deletedCommets = await Commet.deleteMany({
      property_id: req.params.id,
    });

    // Delete the property image
    const propertyImgPath = path.join(__dirname, "..", deletedProperty.img);
    if (fs.existsSync(propertyImgPath)) {
      fs.unlinkSync(propertyImgPath);
    }

    // Delete images associated with comments
    deletedCommets.forEach((commet) => {
      const commetImgPath = path.join(__dirname, "..", commet.img);
      if (fs.existsSync(commetImgPath)) {
        fs.unlinkSync(commetImgPath);
      }
    });

    res.json({ message: "Property and associated comments deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

