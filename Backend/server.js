import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandlers.js";
import path from "path";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

connectDB();
app.use(cors());
app.use("/jokes", router);
app.use("/users", userRouter);
app.use('/image', express.static('./uploads'));

// Get the directory name of the current module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log("Upload path:", path.join(__dirname, "uploads"));

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server running 🏃 on port ${port}`);
});
