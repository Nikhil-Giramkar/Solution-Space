const express = require('express');
const router = express.Router();

//Make DB Connection
require('../db/conn');

const authControllers = require('../controllers/auth-controller');

router.route('/').get(authControllers.home);

router.route('/register').post(authControllers.register)


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