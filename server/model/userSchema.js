const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

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

//pre method is like a middleware
userSchema.pre('save', async function(){
    const user = this; //current user
    
    if(!user.isModified('password')){
        next(); //if password not changed, go to next middleware
    }

    try{
        //Lets do Password Hashing 
        const saltRounds = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;

    }
    catch(error)
    {
        next(error);
    }
})

//Attaching schema to collection/table
//We must decalre name of collection as User only, on Atlas we will see it in plural form 'users'
const User = new mongoose.model('USER', userSchema);

//exporting it to use, whenever required
module.exports = User;