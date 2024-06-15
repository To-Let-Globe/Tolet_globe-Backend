require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact"); // Import contact route

const app = express();

// Connect to MongoDB
mongoose
  .connect(`mongodb://localhost/Contactus`, {
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
app.use(bodyParser.urlencoded({ extended: false }));
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

app.use(passport.initialize());
app.use(passport.session());

// CORS setup
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Use routes
app.use("/auth", authRoute);
app.use("/api", contactRoute); // Use contact route

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
