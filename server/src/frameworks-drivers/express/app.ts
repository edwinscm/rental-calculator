import express from "express";
import cors from "cors";
import authenticationRoute from "./routes/authentication-route.js";
import rentalReportRoute from "./routes/rental-report-route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(authenticationRoute);
app.use(rentalReportRoute);

export default app;
