const http = require('http')

const express = require('express')

const app = express()

app.use((req,res,next)=>{
//add new midleware function
    console.log('in the middleware!')
    next()//Allows the request to continue to the next middleware
     // if we dont use next, we must give response, otherwise the request will be traveling without respnse :C
})

app.use((req,res,next)=>{
    console.log('in another the middleware!')
})//add new midleware function
// next is the function

const server = http.createServer(app)

server.listen(3000)
