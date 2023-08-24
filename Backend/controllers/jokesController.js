// controllers/jokesController.js
import Joke from '../models/jokeModel.js';

// Controller-Funktionen für die CRUD-Operationen

export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

