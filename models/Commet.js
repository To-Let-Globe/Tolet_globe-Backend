const mongoose = require("mongoose");

const commetSchema = new mongoose.Schema(
  {
    property_id: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    stars: {
      type: Number,
      trim: true,
    },
    img: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Commet = mongoose.model("Commet", commetSchema);

module.exports = Commet;
