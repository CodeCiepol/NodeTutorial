const express = require('express')

const router = express.Router()

const usersList = []

router.get('',(req,res,next)=>{
    res.render('home',{pageTitle: 'add new user',path: "/"})
})
router.post('/add-user',(req,res,next)=>{
    usersList.push({name: req.body.name})
    res.redirect('/')
  })

exports.routes = router
exports.users = usersList