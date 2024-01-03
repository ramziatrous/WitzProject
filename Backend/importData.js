import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { germanJokes } from "./data/jokes.js";
import { Joke } from "./models/jokeModel.js";
// import { User } from "./models/userModel.js"; // Benutzer-Modell entfernt

import connectDB from "./config/db.js";

dotenv.config();

console.log(" 🪛  verifying your Mongo URI ");
console.log(" 🧑  verifying user data...");

connectDB();

const insertData = async () => {
  try {
    const existingJokeIds = await Joke.distinct("_id");
    // const existingUserEmails = await User.distinct("email"); // Benutzer entfernt

    const newJokes = germanJokes.filter(
      (joke) => !existingJokeIds.includes(joke._id)
    );
    // const newUsers = users.filter(
    //   (user) => !existingUserEmails.includes(user.email)
    // ); // Benutzer entfernt

    if (newJokes.length === 0 /* && newUsers.length === 0 */) {
      // Benutzer entfernt
      console.log("No new data to insert.");
      process.exit();
    }

    if (newJokes.length > 0) {
      const createdJokes = await Joke.insertMany(newJokes);
      console.log(`${createdJokes.length} new jokes inserted.`);
    }

    // Benutzer-Teil entfernt

    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

insertData();
