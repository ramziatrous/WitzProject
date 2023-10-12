import { Joke } from "../models/jokeModel.js";

const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    console.error("Error getting all jokes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findById(id);

    if (!joke) {
      console.log(`Joke with ID ${id} not found`);
      return res.status(404).json({ message: "Joke not found" });
    }

    res.json(joke );
  } catch (error) {
    console.error("Error getting joke by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const usedJokes = new Set();

const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.countDocuments();

    if (usedJokes.size === count) {
      usedJokes.clear();
    }

    let randomIndex;
    let randomJoke;

    do {
      randomIndex = Math.floor(Math.random() * count);
      randomJoke = await Joke.findOne().skip(randomIndex);
    } while (usedJokes.has(randomJoke._id));

    usedJokes.add(randomJoke._id);
    res.json(randomJoke );
  } catch (error) {
    console.error("Error fetching random joke:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addNewJoke = async (req, res) => {
  try {
    const { jokeText, idUser } = req.body;
    const rating = "0";
    const count = "0";
    const newJoke = new Joke({
      jokeText,
      rating,
      count,
      idUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedJoke = await newJoke.save();

    res.status(201).json({ message: "Joke added successfully", savedJoke });
  } catch (error) {
    console.error("Error adding new joke:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

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
      console.log(`Joke with ID ${id} not found`);
      return res.status(404).json({ message: "Joke not found" });
    }

    res.json({ message: "Joke rating updated successfully", updatedJoke });
  } catch (error) {
    console.error("Error updating joke rating:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updatetext = async (req, res) => {
  try {
    const { id } = req.params;
    const { jokeText } = req.body;

    console.log(`Updating joke text for ID: ${id}`);

    const updatedJoke = await Joke.findByIdAndUpdate(
      id,
      { jokeText, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedJoke) {
      console.log(`Joke with ID ${id} not found`);
      return res.status(404).json({ message: "Joke not found" });
    }

    console.log(`Joke text updated successfully for ID: ${id}`);

    res.json({ message: "Joke text updated successfully", updatedJoke });
  } catch (error) {
    console.error("Error updating joke text:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJoke = await Joke.findByIdAndDelete(id);

    if (!deletedJoke) {
      console.log(`Joke with ID ${id} not found`);
      return res.status(404).json({ message: "Joke not found" });
    }

    res.json({ message: "Joke deleted successfully" });
  } catch (error) {
    console.error("Error deleting joke:", error);
    res.status(500).json({ message: "Internal server error" });
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
