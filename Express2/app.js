const http = require('http')

const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/products" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>')
})

app.post('/products', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})
app.use('/', (req, res, next) => {
  res.send('<h1>hello from express </h1>')
}) //add new midleware function

// const server = http.createServer(app)

// server.listen(3000)

app.listen(3000)
