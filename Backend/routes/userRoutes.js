import express from "express";
import * as userController from "../controllers/userController.js";
import { logRequest } from "../middlewares/requestLogger.js";
import verifyToken from "../middlewares/authMiddleware.js"; // Replace with the actual path
import path from "path";
import multer from "multer";

const userRouter = express.Router();

userRouter.use(logRequest);
let filename = '';
const storage = multer.diskStorage({
    destination: "./uploads", // Specify the folder where files will be stored
    filename: function (req, file, cb) {
      // Define the file name (you can modify this as needed)
      let fl=file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      cb(null,fl);
      filename=fl;
    },
  });
  
  const upload = multer({ storage: storage});


// Public routes
userRouter.post("/register",upload.single('image'),userController.registerUser);
userRouter.post("/login", userController.authUser);
userRouter.get("/getall", userController.getAll);

// Protected route - Requires token for access
userRouter.post("/logout", verifyToken, userController.logoutUser);

export { userRouter };
