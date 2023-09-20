const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
const connectToDb = () => {
  mongoose.connect(
    "mongodb+srv://varasampath753:Vara123@cluster0.4ea9kgy.mongodb.net/",
    {
      useNewUrlParser: true,
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};
export default connectToDb;
