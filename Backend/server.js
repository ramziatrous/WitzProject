import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // Corrected import
import cors from "cors";
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandlers.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// Remove redundant bodyParser import and usage
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser Middleware
app.use(cookieParser());

connectDB();
app.use(cors());
app.use("/jokes", router);
app.use("/users", userRouter);
app.use('/image', express.static('./uploads'));

// Use errorHandler middleware before notFound middleware
app.use(errorHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`Server running 🏃 on port ${port}`);
});
