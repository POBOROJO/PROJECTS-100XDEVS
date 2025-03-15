const express = require("express");
const connectDB = require("./db");
const rootRouter = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1",rootRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

