const mongoose = require('mongoose')

//Database design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
})

//Attaching schema to collection/table
const User = new mongoose.model('USER', userSchema);

//exporting it to use, whenever required
module.exports = User;