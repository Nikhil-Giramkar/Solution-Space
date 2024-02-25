const jwt = require("jsonwebtoken")
const User = require("../model/userSchema");

const authMiddleware = async (req, res, next) =>{ 
    const token = req.header("Authorization");
    //Get the Authorization header from Headers Request

    if(!token){
        return res.status(401).json({message: "Unauthorized HTTP, Token not provided"});
    }

    console.log("Token from Middleware: ", token)

    const jwtToken = token.replace("Bearer", "").trim();

    try{
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        //We get payload of the token
        console.log(isVerified);

        const userData = await User
                                .findOne({email: isVerified.email})
                                .select({
                                    password: 0, //Do not fetch password
                                })
        console.log(userData);

        req.user = userData; //This req.user will be used by /user endpoint
        req.token = token;
        req.userId = userData._id;

        next();
    }
    catch(error){
        return res.status(401).json({message: "Unauthorized HTTP, Token not provided"});
    }
}

module.exports = authMiddleware;