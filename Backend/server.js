import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";

dotenv.config();
const port = process.env.PORT || 3000;

// Initialize the Express app
const app = express();

// Connect to the database
connectDB();

// CORS Middleware activation
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());

// Custom middleware for logging requests
app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  next();
});

// Use the API routes defined in apiRoutes.js
app.use("", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running 🏃 on port ${port}`);
});
