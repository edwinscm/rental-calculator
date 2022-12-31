require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/authentication.route"));
app.use("/api", require("./routes/rental-report.routes"));

module.exports = app;
