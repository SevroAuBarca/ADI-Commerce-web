import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "./models/user.js";

const secretKey = "yourSecretKey";
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, user, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = new User({
      name,
      email,
      user,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    // Create and sign the JWT token
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

authRouter.post("/login", (req, res) => {
  // Here, you can validate the user's credentials (e.g. username and password)
  // If the credentials are valid, generate a JWT token with the user's information
  const email = req.body.email;
  const pass = req.bodyy.pass;
  const token = jwt.sign({ email, pass }, secretKey);

  // Send the token back to the client
  res.json({ token });
});

export default authRouter;
