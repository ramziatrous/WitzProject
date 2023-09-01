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

const getById = async (req, res) => {
  try {
    let result = await Joke.findById({ _id: req.params.id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const usedJokes = new Set(); // Set to keep track of used jokes

const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.countDocuments(); // Get the total number of jokes in the database

    if (usedJokes.size === count) {
      // All jokes have been used, reset the usedJokes set
      usedJokes.clear();
    }

    let randomIndex;
    let randomJoke;

    do {
      randomIndex = Math.floor(Math.random() * count); // Generate a random index
      randomJoke = await Joke.findOne().skip(randomIndex); // Find a random joke by skipping randomIndex jokes
    } while (usedJokes.has(randomJoke._id)); // Check if the joke has been used before

    usedJokes.add(randomJoke._id); // Mark the joke as used
    res.json(randomJoke);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching random joke" });
  }
};

const addNewJoke = async (req, res) => {
  try {
    const { jokeText, idUser } = req.body;
    let rating = "0";
    let count = "0";
    const newJoke = new Joke({
      jokeText,
      rating,
      count,
      idUser,
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

// Update Joke Rating

const updateJokeRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;

    const updatedJoke = await Joke.findByIdAndUpdate(
      id,
      { $set: { rating, updatedAt: new Date() }, $inc: { count: 1 } },

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

// Update Joke Text

const updatetext = async (req, res) => {
  try {
    const { id } = req.params;
    const { jokeText } = req.body;

    const updatedJoke = await Joke.findByIdAndUpdate(
      id,
      { jokeText, updatedAt: new Date() },

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

// Delete a joke
const deleteJoke = async (req, res) => {
  try {
    let result = await Joke.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  getAllJokes,
  getRandomJoke,
  addNewJoke,
  updateJokeRating,
  getById,
  updatetext,
  deleteJoke,
};
