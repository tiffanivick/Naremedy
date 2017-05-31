var express = require('express');
    stylus = require('stylus'),
    bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
        src: __dirname + '/public'
    }
));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.render('index', {title: 'ejs'});
});


var port = 3030;
app.listen(3030);
console.log('Listening on ' + port + '...');