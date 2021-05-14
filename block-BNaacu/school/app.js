var express = require('express');
var mongoose = require('mongoose');
var path = require("path");
const {send} = require('process');

mongoose.connect('mongodb://localhost/school1', ({ useUnifiedTopology: true , useUnifiedTopology: true}), (err) => {
    console.log("Database Connected");
})

var app = express()


app.set("viewengine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/students',require('./routes/students.js'))

app.get('/',(req,res) => {
    var student = {name:"sid",age:20}
    res.render('index',{student:student});
})

// handle error
app.get((req,res,next) => {
    res.send("Page not found");
})

app.listen(3000, () => {
    console.log("Server listening on port 4k");
})