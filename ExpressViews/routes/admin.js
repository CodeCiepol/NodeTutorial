const express = require('express')
const path = require("path")

const rootDir= require('../util/path')

const router = express.Router()
// instead of using app we can use router to router our path
router.get('/add-product', (req, res, next) => {
  // res.send(
  //   '<form action="/admin/add-products" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>'
  // )
  res.sendFile(path.join(rootDir,'views','add-product.html'))
})

// we can use the same path with different method, this gives us different path 
router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
