require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blog");
const contactRoute = require("./routes/contact");
const propertyRoute = require("./routes/property");
const path = require("path");

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database!");
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log(
  "Static files are being served from",
  path.join(__dirname, "uploads")
);
app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Cookie session setup
app.use(
  cookieSession({
    name: "session",
    keys: ["tolet"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// CORS setup
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Use routes
app.use("/auth", authRoute);
app.use("/contact", contactRoute);
app.use("/blogs", blogRoutes);
app.use("/property", propertyRoute);

const port = process.env.PORT||3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
