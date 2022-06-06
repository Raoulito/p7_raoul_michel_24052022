const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connecté à MongoDB..."))
  .catch(() => console.log("NON connecté à MongoDB..."));

app.use(express.json());

//Allows everybody to use this route
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Adding images path
app.use("/images", express.static(path.join(__dirname, "images")));

//Users routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));

app.use(helmet());
app.use(morgan("common"));



module.exports = app;
