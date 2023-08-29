import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandlers.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/jokes", router);
app.use("/user", router);
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running 🏃 on port ${port}`);
});
