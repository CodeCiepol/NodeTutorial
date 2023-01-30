const express = require('express')
const path = require("path")

router = express.Router()

router.get('/', (req, res, next) => {
    // res.send('<h1>hello from express </h1>')
    res.sendFile(path.join(__dirname,"..",'views','shop.html'))
  }) //add new midleware function
  
  module.exports = router