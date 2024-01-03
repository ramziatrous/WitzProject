import { User } from "../models/userModel.js";

import jwt from "jsonwebtoken";

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//@desc register user with picture upload
//@route POST users/register
//@access Public

const registerUser = async (req, res) => {
  try {
    let data = req.body;
    if (req.file) {
      data.image = req.file.filename;
    }

    const userExists = await User.findOne({ email: data.email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      username: data.username,
      email: data.email,
      password: data.password,
      image: data.image,
    });

    const savedUser = await user.save();

    if (savedUser) {
      res.status(201).json({
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
        image: savedUser.image,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//@desc Auth user & get token
//@route POST users/login
//@access Public

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user with the given email in the database
    const user = await User.findOne({ email });

    // Check if the user exists and if the provided password matches
    if (user && (await user.matchPassword(password))) {
      // Create a payload for the JWT containing user information
      const payload = {
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        _id: user._id,
      };

      // Sign the payload to generate a JWT token
      const token = jwt.sign(payload, process.env.JWT_SECRET);

      // Send the token in the response
      res.status(200).json({ mytoken: token });
    } else {
      // Return an error response if authentication fails
      res.status(401).json({ message: "Invalid email or password 👨‍🦲" });
    }
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: "Server error" });
  }
};

//@desc logout user / clear cookie
//@route POST users/logout
//@access Private
const logoutUser = async (req, res) => {
  // You can add logout functionality here if needed
  try {
    res.send("✅ I was written in the Front-End!");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { authUser, registerUser, logoutUser, getAll };
