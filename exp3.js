var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.get('/hi', function(req,res){
    res.send("Hi!");
});

app.get('/welcome', function(req, res){
    res.send("welcome");
});

app.listen(3000);
