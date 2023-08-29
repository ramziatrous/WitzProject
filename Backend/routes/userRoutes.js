import express from "express";
import * as userController from "../controllers/userController.js";
import { logRequest } from "../middlewares/requestLogger.js";

const userRouter = express.Router();

userRouter.use(logRequest);

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.authUser);
userRouter.post("/logout", userController.logoutUser);

export { userRouter };
