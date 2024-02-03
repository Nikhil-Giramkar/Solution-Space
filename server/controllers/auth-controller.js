/*
Controllers in Express.js
------------------------------
In Express.js, controllers are used to process incoming request and interact with Models
and send response back to clients.
The help organize aplication and seperating concerns, following MVC
*/

const bcrypt = require('bcrypt');

//Get User model
const User = require('../model/userSchema');


//Home Logic
const home = async(req, res) =>{
    try{
        res
        .status(200)
        .send("Hello from Expres JS in auth-controller.js");
    }
    catch(error)
    {
        console.log(error);
    }
}

//Register Logic
const register = async (req, res) => {
    //See what we get in request body
    console.log(req.body);

    //Object destructuring
    const { username, email, phone, password } = req.body;

    //validation
    if (!username || !email || !phone || !password ) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        //Check if user with same details already exists
        const userExists = await User.findOne({ email: email })

        if (userExists)
            return res.status(422).json({ error: "User with same email exists" });

        //If user is new
        

        const user = new User({ 
            username, 
            email, 
            phone, 
            password
        });

        //waiting to save in Atlas
        await user.save()

        res.status(201).json({ message: "User registered successfully" })
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = {home, register}