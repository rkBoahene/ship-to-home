const mongoose = require("mongoose")

const User = mongoose.Schema({
    name: {
        type: String,
        required: [true,'name is required'],
    },
    email: {
        type: String,
        required: [true,'email is required'],
    },
    password: {
        type: String,
        required: [true,'password cannot be empty'],
        minlength: [6, "password must me more than 6 characters"]
        
    },
    accountConfirmation: {
        type: Boolean,
        default: false,
    },
    resetPass: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("User",User)