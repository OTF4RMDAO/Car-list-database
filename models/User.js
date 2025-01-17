const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car" }],

     createdAt: {
        type: Date,
        default: Date.now
     }   
});

module.exports = mongoose.model("User", UserSchema);