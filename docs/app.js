var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyPars = require("body-parser"),
    methodOverride = require("method-override"),
    serveStatic = require('serve-static');

mongoose.connect("mongodb://localhost/zendosite");
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.use(bodyPars.urlencoded({extended:true}));
app.use(serveStatic(__dirname + '/views'));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.get('/', function(req, res){
    res.redirect('/index');
});

app.get('/index', function(req, res){
    res.render('index');
});

app.get('/index/about', function(req, res){
    res.render('about');
});



// sets server to listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Zendo Server Started");
});