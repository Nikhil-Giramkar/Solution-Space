const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Hello from router in auth.js");
})


router.post('/register', (req, res)=>{
    //See what we get in request body
    console.log(req.body);
    res.json({
        "message": req.body
    });
})


module.exports = router;