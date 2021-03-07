const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const helpers = require('handlebars-helpers')()
const bodyParser = require('body-parser')
const generatorTrashTalk = require('./trash_talk_generator')


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const trashTalk = generatorTrashTalk(options)
  res.render('index', { trashTalk, options })
})

app.listen(port, () => {
  console.log('Trash Talk Generator is running on port 3000')
})