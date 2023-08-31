import express from "express";
import * as jokesController from "../controllers/jokesController.js";
import { logRequest } from "../middlewares/requestLogger.js";

const router = express.Router();

router.use(logRequest);
//Jokes routes
router.get("/getall", jokesController.getAllJokes); // getAllJokes function
router.get("/getbyid/:id", jokesController.getById);
router.put("/updatetext/:id", jokesController.updatetext);
router.post("/create", jokesController.addNewJoke); // addNewJoke function
router.put("/update/:id", jokesController.updateJokeRating);
router.get("/random", jokesController.getRandomJoke);

//USER  routes

router.get("/trigger-error", (req, res, next) => {
  try {
    throw new Error("This is a test error");
  } catch (error) {
    next(error);
  }
});

export { router };
