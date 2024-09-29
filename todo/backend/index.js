import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
