const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

const Contact = new mongoose.model('CONTACT', contactSchema);
module.exports = Contact;