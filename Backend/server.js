import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { v4 as uuidv4 } from "uuid"; // Using UUID to generate unique IDs
import { jokes } from "./data/jokes.js";

const port = process.env.PORT || 3000;
connectDB();
const app = express();

app.use(express.json()); // Parse JSON request bodies

app.get("/", (req, res) => {
  res.send("API is running ...");
});

// Get a random joke
app.get("/api/jokes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  res.json(randomJoke);
});

// Get all jokes
app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

// Get a specific joke by ID
app.get("/api/jokes/:id", (req, res) => {
  const jokeId = parseInt(req.params.id); // Convert the id parameter to a number
  const joke = jokes.find((joke) => joke.id === jokeId);
  if (!joke) {
    return res.status(404).json({ message: "Joke not found" });
  }
  res.json(joke);
});

// Add a new joke
app.post("/api/jokes", (req, res) => {
  const newJoke = {
    id: uuidv4(), // Generate a new UUID for the ID
    jokeText: req.body.jokeText,
    rating: req.body.rating,
    createdAt: new Date().toISOString(), // Set the createdAt timestamp
    updatedAt: new Date().toISOString(), // Set the updatedAt timestamp
  };
  jokes.push(newJoke);
  res.status(201).json(newJoke);
});

// Update an existing joke
app.put("/api/jokes/:id", (req, res) => {
  const jokeId = req.params.id; // Get the id from the URL
  const jokeIndex = jokes.findIndex((joke) => joke.id === jokeId);
  if (jokeIndex === -1) {
    return res.status(404).json({ message: "Joke not found" });
  }
  jokes[jokeIndex].jokeText = req.body.jokeText; // Update the joke text
  jokes[jokeIndex].updatedAt = new Date().toISOString(); // Update the updatedAt timestamp
  res.json(jokes[jokeIndex]);
});

// Delete a joke
app.delete("/api/jokes/:id", (req, res) => {
  const jokeIndex = jokes.findIndex((joke) => joke.id === req.params.id);
  if (jokeIndex === -1) {
    return res.status(404).json({ message: "Joke not found" });
  }
  const deletedJoke = jokes.splice(jokeIndex, 1);
  res.json(deletedJoke[0]);
});

app.listen(port, () => console.log(`Server running 🏃 on port ${port}`));
