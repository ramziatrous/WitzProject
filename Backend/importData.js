import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { jokes } from "./data/jokes.js";

import Joke from "./models/jokeModel.js";
import connectDB from "./config/db.js";

dotenv.config();

console.log(" 🪛  verifying your Mongo URI ");

connectDB();

const importData = async () => {
  try {
    await Joke.deleteMany();

    const sampleJokes = jokes.map((joke) => {
      return { ...joke };
    });

    await Joke.insertMany(sampleJokes);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

importData();
