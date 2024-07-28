require('dotenv').config()
const express = require("express");
const PORT = 8000;
app = express();
 
app.get("/",(req,res) => {
    return res.send("everthing is fine here")
})
app.get("/twitter",(req,res) => {
    return res.send("you have just heard about us never met person to person")
})
app.listen(process.env.PORT,() => console.log(`Server Started at ${port}`))
