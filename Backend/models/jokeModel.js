// models/jokeModel.js
import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  jokeText: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Joke = mongoose.model('Joke', jokeSchema);

export default Joke;
