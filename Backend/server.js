import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import { router } from "./routes/apiRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandlers.js";
dotenv.config();
const port = 80;

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

connectDB();
app.use(cors(corsOptions));
app.use("/jokes", router);
app.use("/users", userRouter);
app.use('/image', cors(corsOptions), express.static('./uploads'));

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server running 🏃 on port ${port}`);
});
