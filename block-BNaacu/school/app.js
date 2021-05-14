var express = require('express');
var mongoose = require('mongoose');
var path = require("path");

mongoose.connect('mongodb://localhost/school1', (err) => {
    console.log("Database Connected");
})

var app = express()

app.set("viewengine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/student',require('./routes/students.js'))

app.get('/',(req,res) => {
    var student = {name:"sid",age:20}
    res.render('index',{student:student});
})

app.listen(3000, () => {
    console.log("Server listening on port 4k");
})