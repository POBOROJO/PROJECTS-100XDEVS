const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    trime:true,
    lowercase:true,
    minLenght:3,
    maxLength:20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  firstName:{
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = { User };
 