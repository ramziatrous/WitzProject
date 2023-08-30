import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

//@desc Auth user & get token
//@route POST users/login
//@access Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      // Set JWT as HTTP-Only cookie
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
      });

      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password 👨‍🦲" });
    }
  } catch (error) {
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
