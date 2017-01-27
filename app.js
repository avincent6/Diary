var express = require('express')
var exphbs = require('express-handlebars')
var app = express()

app.set('views', 'views/');
app.engine('.hbs', exphbs({
  layoutsDir: 'views/',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use('/', express.static('./dist'));

app.get('/', function (req, res) {
  res.render('layouts/main')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
