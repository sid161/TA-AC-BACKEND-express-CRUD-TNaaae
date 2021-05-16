var express = require('express');
var mongoose = require('mongoose');
var path = require("path");


mongoose.connect("mongodb://localhost/user-diary", (err) => {
    console.log(err ? err : "Connected database");
})

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));

app.get('/', (req,res) => {
    res.send("Welcome");
})

app.listen(4000, () => {
    console.log("Server listening on port 4k");
})

