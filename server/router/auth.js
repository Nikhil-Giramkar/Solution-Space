const express = require('express');
const router = express.Router();

//Make DB Connection
require('../db/conn');

//Get User model
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send("Hello from router in auth.js");
})


router.post('/register', (req, res) => {
    //See what we get in request body
    console.log(req.body);

    //Object destructuring
    const { name, email, phone, work, password, confirmPassword } = req.body;

    //validation
    if (!name || !email || !phone || !work || !password || !confirmPassword) {
        return res.status(422).json({ error: "Please fill all fields" });
    }

    //Check if user with same details already exists
    User.findOne({ email: email })
        .then((userExists) => {
            if (userExists)
                return res.status(422).json({ error: "User with same email exists" });

            //If user is new
            //We can simply pass req.body as parameter, all fields will get set automatically
            //  const user = new User(req.body)
            //But preferred way is to send all needed fields manually, since we might not need, 1 or 2 fileds for DB
            const user = new User({ name, email, phone, work, password, confirmPassword });

            //the user object is like a document, or a row in table
            user.save() //To save to DB, also it returns a promise
                .then(() => {
                    res.status(201).json({ message: "User registered successfully" })
                })
                .catch((err) => {
                    res.status(500).json({ error: "User could not be registered" })
                })


        })
        .catch(err => {
            console.log(err);
        })



})


module.exports = router;