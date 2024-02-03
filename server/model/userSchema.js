const mongoose = require('mongoose')

//Database design
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})

//Attaching schema to collection/table
//We must decalre name of collection as User only, on Atlas we will see it in plural form 'users'
const User = new mongoose.model('USER', userSchema);

//exporting it to use, whenever required
module.exports = User;