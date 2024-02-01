const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv')

const app = express();
//Determine the path of config.env file
dotenv.config({path: './config.env'});

//Fetch database connection string from DATABASE key stored in config.env file.
const DBConnectionString = process.env.DATABASE;

//Fetch PORT number from config file 
const PORT = process.env.PORT

//Connection
//mongoose.connect returns a promise
mongoose.connect(DBConnectionString) 
    .then(()=>{
        console.log("MongoDB Connection successful")
    })
    .catch(err => {
        console.log(`Connection Not successful \nError: ${err}`);
    })


//Middleware
//Middlewares have access to Request, response and next() function, which help calling next middleware below it
const middleware = (req, res, next) =>{
    console.log(`Hello, my middeware called`);
    next();
}

app.get("/", (req, res)=>{
    res.send("Hello World from Backend Home Page!!!");
})

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