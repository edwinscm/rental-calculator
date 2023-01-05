import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", require("./routes/authentication-route"));
app.use("/api", require("./routes/rental-report-route"));

export default app;
