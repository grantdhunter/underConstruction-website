var express = require('express');
var path = require('path');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.render('index');
});

app.listen(8080);