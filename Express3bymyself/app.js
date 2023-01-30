const http = require("http")

const express = require("express")

const message ="<div><h1>list of users</h1></div>"+
"<ul>"+
"<li>us1</li>"+
"<li>us2</li>"+
"<li>us3</li>"+
"</ul>"

const app=express()

app.use("/users",(req,res,next)=>{
    res.send(message);
})

app.use("/",(req,res,next)=>{
    res.send("<h1>go to /users to see users!</h1>")
})

app.listen(3000)