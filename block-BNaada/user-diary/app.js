var express = require('express');
var mongoose = require('mongoose');
var path = require("path");

mongoose.connect('mongodb://localhost/user-diary', (err) => {
    console.log(err ? err: "Connected database");
})
var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.listen(3000, () => {
    console.log("server listening on port 3k")
})