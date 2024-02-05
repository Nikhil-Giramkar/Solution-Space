const express = require('express')
const dotenv = require('dotenv')

const app = express();
//Determine the path of config.env file
dotenv.config({path: './config.env'});

//Fetch PORT number from config file 
const PORT = process.env.PORT

//Connecting to database directly
require('./db/conn')
//using User collection
// const User = require('./model/userSchema')

//Middleware
//To help app understand json data in request body
app.use(express.json());

//Middlewares have access to Request, response and next() function, which help calling next middleware below it
const middleware = (req, res, next) =>{
    console.log(`Hello, my middeware called`);
    next();
}
//We will use middleware syntax to call router
const router = require('./router/auth-router')
//We will mount the router to a specific URL, So all routes will have api/auth as prefix, Ex: localhost:2344/api/auth/register
app.use("/api/auth", router);

// app.get("/", (req, res)=>{
//     res.send("Hello World from Backend Home Page!!!");
// })

app.get("/contact", (req, res)=>{
    res.send("Hello World from Backend Contact Us!!!");
})

//I will add middleware as second param here, for endpoint I wish to secure
app.get("/about", middleware, (req, res)=>{
    //The middleware will be called first, before serving this endpoint
    res.send("Hello World from Backend About Me!!!");
})

app.get("/signin", (req, res)=>{
    res.send("Hello World SIGN IN!!!");
})


app.get("/signup", (req, res)=>{
    res.send("Hello World SIGN UP!!!");
})


app.listen(PORT, ()=>{
    console.log(`ExpressJs listening at: http://localhost:${PORT}`);
})