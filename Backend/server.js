import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";
import cors from "cors";
const port = process.env.PORT || 3000;
connectDB();
const app = express();


app.use(express.json());
app.use("", router);

app.use(cors());
app.use(express.json()); // Parse JSON request bodies




app.listen(port, () => console.log(`Server running 🏃 on port ${port}`));
