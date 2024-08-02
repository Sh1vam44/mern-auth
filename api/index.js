import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://kumar:shivam@mern.z89sxe3.mongodb.net/?retryWrites=true&w=majority&appName=mern"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
