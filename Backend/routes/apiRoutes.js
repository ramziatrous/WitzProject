import express from "express";
import * as jokesController from "../controllers/jokesController.js";
import { logRequest } from "../middlewares/requestLogger.js";

const router = express.Router();

router.use(logRequest);

router.get("/jokes", jokesController.getAllJokes); // getAllJokes function
router.post("/jokes", jokesController.addNewJoke); // addNewJoke function
// router.put("/jokes/:id", jokesController.updateJoke);
router.get("/jokes/random", jokesController.getRandomJoke);

router.get("/trigger-error", (req, res, next) => {
  try {
    throw new Error("This is a test error");
  } catch (error) {
    next(error);
  }
});

export { router };
