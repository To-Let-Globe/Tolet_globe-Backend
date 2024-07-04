const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const Commet = require("../models/Commet");
const multer = require("multer");

// Set up multer for file storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Convert image file to base64 string
const convertImageToBase64 = (buffer) => {
  return buffer.toString("base64");
};

// Convert base64 string to image
const convertBase64ToImage = (base64String, res) => {
  const img = Buffer.from(base64String, "base64");
  res.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Content-Length": img.length,
  });
  res.end(img);
};

// Create a new property
router.post("/", upload.array("image", 10), async (req, res) => {
  try {
    // Convert all images to base64
    const images = req.files.map((file) => {
      return convertImageToBase64(file.buffer);
    });

    const propertyData = {
      ...req.body,
      img: images, // Store base64 strings
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
      const base64String = convertImageToBase64(req.file.buffer);

      const commetData = {
        ...req.body,
        property_id: req.params.propertyid,
        img: base64String,
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

// Get property images by ID and convert base64 string to images
router.get("/:id/images", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property || !property.img || property.img.length === 0) {
      return res.status(404).json({ message: "Property or images not found" });
    }

    // Return the first image as an example
    const base64String = property.img[0]; // Assuming you want to convert the first image

    convertBase64ToImage(base64String, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get comment images by ID and convert base64 string to images
router.get("/commets/:commetid/image", async (req, res) => {
  try {
    const commet = await Commet.findById(req.params.commetid);

    if (!commet || !commet.img) {
      return res.status(404).json({ message: "Comment or image not found" });
    }

    convertBase64ToImage(commet.img, res);
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

    // Convert new images to base64
    const newImages = req.files.map((file) => {
      return convertImageToBase64(file.buffer);
    });

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

   await Commet.deleteMany({
      property_id: req.params.id,
    });

    res.json({ message: "Property and associated comments deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
