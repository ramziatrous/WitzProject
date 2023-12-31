// models/jokeModel.js
import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  jokeText: { type: String, required: true },
  rating: { type: String, required: false },
  count: { type: Number, required: false },
  idUser: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Joke = mongoose.model("Joke", jokeSchema);

export { Joke }; // Corrected export statement
