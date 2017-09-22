const express = require('express');
const app = express();
var path = require('path')
var bodyParser = require('body-parser');
const publicPath = __dirname + '/public'

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.send('Hello from root');
});

app.get('/test', function (req, res) {
    res.send('Hello from test');
});

app.get('/login', function(req, res) {
    res.sendFile(publicPath + '/login.html', function (err) {
        // handle error
    });
});

app.post('/login', function(req, res) {
     if (req.body.user === 'asam' || req.body.pass === 'dumkode') {
        res.sendFile(publicPath + '/loggedin.html', function (err) {
            // handle error
        });
    } else {
        res.json({success: false});
    }
});


app.listen(3000);