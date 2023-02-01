const express = require('express')


const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const usersRouter = require('./routes/users')
const homeData=require('./routes/home')

app.use(express.static(path.join(__dirname,'public')))

app.use('/users',usersRouter)
app.use(homeData.routes)

app.set('view engine', 'ejs') //seting default templating engine
app.set('views', 'views')

app.use("/",(req,res,next)=>{
    res.render('404',{pageTitle: "not found",path:""})
    })

app.listen(3000)