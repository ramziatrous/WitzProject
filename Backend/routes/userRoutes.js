import express from "express";
import * as userController from "../controllers/userController.js";
import { logRequest } from "../middlewares/requestLogger.js";
import verifyToken from "../middlewares/authMiddleware.js"; // Replace with the actual path

const userRouter = express.Router();

userRouter.use(logRequest);

// Public routes
userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.authUser);

// Protected route - Requires token for access
userRouter.post("/logout", verifyToken, userController.logoutUser);

export { userRouter };
