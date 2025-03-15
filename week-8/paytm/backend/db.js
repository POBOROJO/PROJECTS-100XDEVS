const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected successfully");
    }
    catch(error) {
        console.error("Error connecting to database",error);
        process.exit(1);
    }
}

module.exports = connectDB;
