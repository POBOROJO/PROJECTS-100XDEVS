const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected successfully");
    }
    catch(error){
        console.error("Error connecting to database",error);
    }
}

export default connectDB();
