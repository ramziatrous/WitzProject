import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";
import cors from "cors";
const port = process.env.PORT || 3000;
connectDB();
const app = express();

// CORS-Konfiguration hinzufügen
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("", router);

// CORS-Middleware aktivieren
app.use(cors());

app.listen(port, () => console.log(`Server running 🏃 on port ${port}`));
