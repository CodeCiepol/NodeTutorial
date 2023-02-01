const express = require('express')
const path = require('path')

const app = express()

const usersRouter = require('./routes/users')

app.use(express.static(path.join(__dirname,'public')))


app.use(usersRouter)
app.use("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views',"home.html"))
    })

app.listen(3000)