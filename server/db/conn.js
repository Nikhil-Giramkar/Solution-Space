const mongoose = require("mongoose")
//Fetch database connection string from DATABASE key stored in config.env file.
//Path of config.env already refined in app.js
const DBConnectionString = process.env.DATABASE;

const connectDB = async () => {
    try{
        await mongoose.connect(DBConnectionString);

        console.log("MongoDB connection successful")
    }
    catch(err){
        console.error(`MongoDB Connection Failed - ${err}`);
        process.exit(0);
    }
}

module.exports = connectDB;

