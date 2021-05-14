var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/school', (err) => {
    console.log("Connected to database");
})

var app = express()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.get('/',(req,res) => {
    // var user = {name: "sid", age:18}
    res.render("index.ejs")
})

app.listen(3000,() => {
    console.log("Server listening on port 2k")
})