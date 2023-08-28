import express from "express";
import * as jokesController from "../controllers/jokesController.js";

const router = express.Router();

router.get("/jokes", jokesController.getAllJokes); // getAllJokes function
router.post("/jokes", jokesController.addNewJoke); // addNewJoke function
// router.put("/jokes/:id", jokesController.updateJoke);
router.get("/jokes/random", jokesController.getRandomJoke);

export { router };
