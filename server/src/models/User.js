import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
    unique: false,
  },
  password: { type: String, required: true },
});

const User = model("User", userSchema);

export default User;
