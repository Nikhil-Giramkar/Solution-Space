const mongoose = require("mongoose")

//Fetch database connection string from DATABASE key stored in config.env file.
//Path of config.env already refined in app.js
const DBConnectionString = process.env.DATABASE;

//Connection
//mongoose.connect returns a promise
mongoose.connect(DBConnectionString) 
    .then(()=>{
        console.log("MongoDB Connection successful")
    })
    .catch(err => {
        console.log(`Connection Not successful \nError: ${err}`);
    })
