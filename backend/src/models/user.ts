import mongoose from "mongoose";

// only auth0ID and email reuquired
const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true,

    },
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    country: {
        type: String,
    },
});

// use mongoose User to interact
const User = mongoose.model("User", userSchema)
export default User;
