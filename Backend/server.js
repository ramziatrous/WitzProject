import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandlers.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// Body parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use(cors());
app.use("/jokes", router);
app.use("/users", userRouter);

// Use errorHandler middleware before notFound middleware
app.use(errorHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`Server running 🏃 on port ${port}`);
});
