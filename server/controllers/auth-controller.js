/*
Controllers in Express.js
------------------------------
In Express.js, controllers are used to process incoming request and interact with Models
and send response back to clients.
The help organize aplication and seperating concerns, following MVC
*/
//Home Logic

const home = async(req, res) =>{
    try{
        res
        .status(200)
        .send("Hello from Expres JS in auth-controller.js");
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = {home}