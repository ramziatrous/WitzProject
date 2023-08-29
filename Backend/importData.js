import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { germanJokes } from "./data/jokes.js";
import { users } from "./data/users.js";
import { Joke } from "./models/jokeModel.js";
import { User } from "./models/userModel.js";

import connectDB from "./config/db.js";

dotenv.config();

console.log(" 🪛  verifying your Mongo URI ");
console.log(" 🧑  verifying user data...");

connectDB();

const importData = async () => {
  try {
    await Joke.deleteMany();
    await User.deleteMany();

    const sampleJokes = germanJokes.map((joke) => ({ ...joke }));

    await Joke.insertMany(sampleJokes);
    await User.insertMany(users);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

importData();
