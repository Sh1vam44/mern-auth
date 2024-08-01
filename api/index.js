import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://kumar:shivam@mern.z89sxe3.mongodb.net/mern-authretryWrites=true&w=majority&appName=mern"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
