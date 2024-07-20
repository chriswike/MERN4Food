import mongoose from "mongoose";

// only auth0ID and email reuquired used to create user on mongodb
const userSchema = new mongoose.Schema({
    auth0Id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
     required: true,
    },
    name: {
      type: String,
    },
    addressLine1: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  });
  

// use mongoose User to interact
const User = mongoose.model("User", userSchema)
export default User;
