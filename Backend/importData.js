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

const insertData = async () => {
  try {
    const existingJokeIds = await Joke.distinct("_id");
    const existingUserEmails = await User.distinct("email");

    const newJokes = germanJokes.filter(
      (joke) => !existingJokeIds.includes(joke._id)
    );
    const newUsers = users.filter(
      (user) => !existingUserEmails.includes(user.email)
    );

    if (newJokes.length === 0 ) {
      console.log("No new data to insert.");
      process.exit();
    }

    if (newJokes.length > 0) {
      const createdJokes = await Joke.insertMany(newJokes);
      console.log(`${createdJokes.length} new jokes inserted.`);
    }

    if (newUsers.length > 0) {
      const createdUsers = await User.insertMany(newUsers);

      // Create admin user only if it doesn't exist
      if (!existingUserEmails.includes("admin@email.com")) {
        const adminUser = createdUsers[0]._id;
        console.log(`${createdUsers.length} new users inserted.`);
      } else {
        console.log("Admin user already exists.");
      }
    }

    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

insertData();
