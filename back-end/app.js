require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./setup/auth.route"));
app.use("/api", require("./routes/rentalReport.routes"));

module.exports = app;
