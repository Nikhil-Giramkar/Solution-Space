const express = require('express')
const cors = require('cors');

const dotenv = require('dotenv')
dotenv.config({path: './config.env'});

const authRouter = require('./router/auth-router')
const contactRouter = require('./router/contact-router')

const errorMiddleware = require('./middlewares/error-middleware')
const connectDB = require('./db/conn');

const app = express();
//Determine the path of config.env file
dotenv.config({path: './config.env'});

//Fetch PORT number from config file 
const PORT = process.env.PORT

//Middlewares

//Handling CORS policy issue

//Need to mention cors option else data won't be saved in DB
const corsOptions = {
    origin: "http://localhost:5173", //frontend URL
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD", //Types of requests to accept from above URL
    credentials: true,
}
app.use(cors(corsOptions));

//To help app understand json data in request body
app.use(express.json());

//We will mount the router to a specific URL, So all routes will have api/auth as prefix, Ex: localhost:2344/api/auth/register
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);


app.use(errorMiddleware);


connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log(`ExpressJs listening at: http://localhost:${PORT}`);
    })
})
