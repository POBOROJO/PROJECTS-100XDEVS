import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config({
  path: ".env",
});

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
