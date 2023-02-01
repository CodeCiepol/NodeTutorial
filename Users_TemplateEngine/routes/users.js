const express = require('express')
const path = require('path')

const router = express.Router()

const homeData= require('./home')

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
  res.render('users', { pageTitle: 'users',users: homeData.users, path: '/users' })
})

module.exports = router
