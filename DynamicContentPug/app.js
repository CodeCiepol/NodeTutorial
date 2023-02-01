const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.set('view engine', 'pug') //seting default templating engine
app.set('views', 'views')

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.render('404') //it will use default templating engine (which is set in app.js)
})

app.listen(3000)
