var express = require('express');
var app = express();

app.get('/', function(req,res){
    console.log(res.app);
    res.send("Hello World!");
});

app.listen(3000);