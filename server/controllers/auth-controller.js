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

        res.status(201).json({ 
            message: "Registeration successful", 
            token: await user.generateToken(), //Passing JWT token issued by server to client
            userId: user._id.toString()
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error");
    }

}

//Login Logic
const login = async (req, res) => {
    //Se waht we get in request
    console.log(req.body);

    try{
        const {email, password} = req.body;
        
        if(!email || !password)
            return res.status(422).json({ error: "Please fill all fields" });

        const userExists = await User.findOne({email: email})


        if(!userExists)
            return res.status(400).json({message: "Invalid credentials"})

        //If email found, compare passwords

        const isUserPasswordMatch = await userExists.comparePassword(password);

        if(isUserPasswordMatch){
            res.status(201).json({ 
                message: "Login successful", 
                token: await userExists.generateToken(), //Passing JWT token issued by server to client
                userId: userExists._id.toString()
            });
        }
        else{
            return res.status(400).json({message: "Invalid credentials"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server error");
    }

}

//User data fetch
const user = async (req, res) => {
    try{
        const userData = req.user;
        console.log(userData)
        return res.status(200).json({
            "msg": userData
        })
    }
    catch(error){
        console.log("Error in fetching user details - ", error);
    }
}
module.exports = {home, register, login, user}