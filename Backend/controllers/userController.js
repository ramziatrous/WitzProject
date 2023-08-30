import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: "uploads/", // Specify the folder where files will be stored
  filename: function (req, file, cb) {
    // Define the file name (you can modify this as needed)
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

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

//@desc register user with picture upload
//@route POST users/register
//@access Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Handle file upload using multer
  upload.single("image")(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ message: "File upload error" });
    }

    const imageFileName = req.file ? req.file.filename : "default.jpg"; // Get the uploaded file name or set default

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "User already exists" });
    } else {
      try {
        const user = await User.create({
          username,
          email,
          password,
          image: imageFileName, // Save the image file name in the database
        });

        if (user) {
          res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            image: user.image,
          });
        } else {
          res.status(400).json({ message: "Invalid user data" });
        }
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    }
  });
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

export { authUser, registerUser, logoutUser };
