const express = require('express');
const router = express.Router();

//Make DB Connection
require('../db/conn');

//Get User model
const User = require('../model/userSchema');

const home = require('../controllers/auth-controller');

router.route('/').get(home);

//Promises version
// router.post('/register', (req, res) => {
//     //See what we get in request body
//     console.log(req.body);

//     //Object destructuring
//     const { name, email, phone, work, password, confirmPassword } = req.body;

//     //validation
//     if (!name || !email || !phone || !work || !password || !confirmPassword) {
//         return res.status(422).json({ error: "Please fill all fields" });
//     }

//     //Check if user with same details already exists
//     User.findOne({ email: email })
//         .then((userExists) => {
//             if (userExists)
//                 return res.status(422).json({ error: "User with same email exists" });

//             //If user is new
//             //We can simply pass req.body as parameter, all fields will get set automatically
//             //  const user = new User(req.body)
//             //But preferred way is to send all needed fields manually, since we might not need, 1 or 2 fileds for DB
//             const user = new User({ name, email, phone, work, password, confirmPassword });

//             //the user object is like a document, or a row in table
//             user.save() //To save to DB, also it returns a promise
//                 .then(() => {
//                     res.status(201).json({ message: "User registered successfully" })
//                 })
//                 .catch((err) => {
//                     res.status(500).json({ error: "User could not be registered" })
//                 })


//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


//Async Await version
router.route('/register').post(async (req, res) => {
    //See what we get in request body
    console.log(req.body);

    //Object destructuring
    const { name, email, phone, work, password, confirmPassword } = req.body;

    //validation
    if (!name || !email || !phone || !work || !password || !confirmPassword) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        //Check if user with same details already exists
        const userExists = await User.findOne({ email: email })

        if (userExists)
            return res.status(422).json({ error: "User with same email exists" });

        //If user is new
        const user = new User({ name, email, phone, work, password, confirmPassword });

        //waiting to save in Atlas
        await user.save()
        res.status(201).json({ message: "User registered successfully" })
    }
    catch (err) {
        console.log(err);
    }

})


//Sign In
router.post("/signin", async (req, res)=>{
    // console.log(req.body);
    // res.json({message: "Sign In Done"});
    try{
        const {email, password} = req.body;

        if(!email || !password)
            return res.status(400).json("Please fill all credentials")

        const userFound = await User.findOne({
            email: email
        })

        console.log(userFound);

        res.json({message: "User with this email found"});
    }
    catch(err){
        console.log(err);
    }
})
module.exports = router;