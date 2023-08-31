import express from "express";
import * as jokesController from "../controllers/jokesController.js";
import { logRequest } from "../middlewares/requestLogger.js";

const router = express.Router();

router.use(logRequest);

// Jokes routes
router.get("/getall", jokesController.getAllJokes);
router.get("/getbyid/:id", jokesController.getById); // für das updaten
router.get("/random", jokesController.getRandomJoke);
router.post("/create", jokesController.addNewJoke);
router.put("/update/:id", jokesController.updateJokeRating);
router.put("/updatetext/:id", jokesController.updatetext); // update joketext
router.delete("/delete", jokesController.deleteJoke);

//USER  routes

router.get("/trigger-error", (req, res, next) => {
  try {
    throw new Error("This is a test error");
  } catch (error) {
    next(error);
  }
});

export { router };
