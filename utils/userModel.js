import mongoose from "mongoose";

const UserSchema =
  mongoose.models.users ||
  new mongoose.Schema({
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    cartDetails: {
      type: [],
      default: [],
    },
    favorites: {
      type: [],
      default: [],
    },
  });

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
