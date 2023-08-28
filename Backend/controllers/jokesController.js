import { Joke } from "../models/jokeModel.js"; // Importing the named export

// Controller-Funktionen für die CRUD-Operationen

const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getRandomJoke = async (req, res) => {
  
  try {
    const count = await Joke.countDocuments(); // Get the total number of jokes in the database
    const randomIndex = Math.floor(Math.random() * count); // Generate a random index
    const randomJoke = await Joke.findOne().skip(randomIndex); // Find a random joke by skipping randomIndex jokes
    res.json(randomJoke);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching random joke" });
  }
};

const addNewJoke = async (req, res) => {
  try {
    const { jokeText, rating } = req.body;

    const newJoke = new Joke({
      jokeText,
      rating,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedJoke = await newJoke.save();

    res.status(201).json(savedJoke);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding new joke" });
  }
};

const updateJokeRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;

    const updatedJoke = await Joke.findByIdAndUpdate(
      id,
      { rating, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedJoke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    res.json(updatedJoke);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating joke rating" });
  }
};

export { getAllJokes, getRandomJoke, addNewJoke, updateJokeRating };


