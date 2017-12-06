var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express();
app.use(sassMiddleware({
	/* Options */
	src: path.join(__dirname, 'public', 'styles'),
	dest: path.join(__dirname, 'public'),
	debug: true,
	outputStyle: 'compressed',
	prefix: '/public'
}));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(3000)
console.log('Listening on 3000.')