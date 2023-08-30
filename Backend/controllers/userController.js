import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

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
      };

      // Sign the payload to generate a JWT token
      const token = jwt.sign(payload, "123456");

      // Send the token in the response
      res.status(200).send({ mytoken: token });
    } else {
      // Return an error response if authentication fails
      res.status(401).json({ message: "Invalid email or password 👨‍🦲" });
    }
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: "Server error" });
  }
};

//@desc register user
//@route POST users/register
//@access Public
const registerUser = async (req, res) => {
  try {
    res.send(" ✅ Register user response");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//@desc logout user / clear cookie
//@route POST users/logout
//@access Private
const logoutUser = async (req, res) => {
  try {
    res.send(" ✅ Logout user response");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { authUser, registerUser, logoutUser };
