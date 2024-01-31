const express = require('express')
const app = express();
const PORT = 8765;

app.get("/", (req, res)=>{
    res.send("Hello World from Backend Home Page!!!");
})

app.get("/contact", (req, res)=>{
    res.send("Hello World from Backend Contact Us!!!");
})

app.get("/about", (req, res)=>{
    res.send("Hello World from Backend About Us!!!");
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