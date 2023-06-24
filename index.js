const express = require('express')
require("dotenv").config()

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send({"message":`base api point for the user ${process.env.NAME}`})
})

app.get("/blogs",(req,res)=>{
    res.send({"message":"Blah blah...."})
})

app.listen(process.env.PORT,()=>{
    console.log("Server running on 7000");
})