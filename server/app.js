const express = require('express')

const dotenv = require('dotenv')
dotenv.config({path: './config.env'});

const errorMiddleware = require('./middlewares/error-middleware')
const connectDB = require('./db/conn');

const app = express();
//Determine the path of config.env file
dotenv.config({path: './config.env'});

//Fetch PORT number from config file 
const PORT = process.env.PORT

//Middleware
//To help app understand json data in request body
app.use(express.json());


//We will use middleware syntax to call router
const router = require('./router/auth-router')
//We will mount the router to a specific URL, So all routes will have api/auth as prefix, Ex: localhost:2344/api/auth/register
app.use("/api/auth", router);


app.use(errorMiddleware);


connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log(`ExpressJs listening at: http://localhost:${PORT}`);
    })
})
