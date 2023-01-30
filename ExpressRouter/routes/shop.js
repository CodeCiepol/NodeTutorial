const express = require('express')

router = express.Router()

router.get('/', (req, res, next) => {
    res.send('<h1>hello from express </h1>')
  }) //add new midleware function
  
  module.exports = router