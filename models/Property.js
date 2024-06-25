const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  Timestamp: { type: Date, default: Date.now },
  images: [String],
  price: { type: String },
  noOfRooms: { type: Number },
  noOfbathrooms: { type: Number },
  description: { type: String },
  AnalystName: { type: String },
  OwnerName: { type: String },
  OwnerContactNumber: { type: String },
  OwnerAlternateContactNumber: { type: String },
  Locality: { type: String },
  Address: { type: String },
  SpaceType: { type: String },
  PropertyType: { type: String },
  CurrentResidenceOfOwner: { type: String },
  Rent: { type: String },
  Concession: { type: String },
  PetsAllowed: { type: String },
  Preference: { type: String },
  IfBachelors: { type: String },
  Type: { type: String },
  BHK: { type: String },
  Floor: { type: String },
  NearestLandmark: { type: String },
  TypeOfWashroom: { type: String },
  CoolingFacility: { type: String },
  CarParking: { type: String },
  SubscriptionAmount: { type: String },
  CommentByAnalyst: { type: String },
  PicturesAndVideos: { type: String },
  LocationLink: { type: String },
  RegistrationDate: { type: String },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
