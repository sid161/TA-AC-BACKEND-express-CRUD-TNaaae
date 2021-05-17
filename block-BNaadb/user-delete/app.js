var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('user-delete', (err) => {
    console.log(err ? err : "Connected to database");
})

var app = express();

app.set("view engine",ejs)
app.set("views", path.join(__dirname , "views"));

app.get('/', (req,res,next) => {
    res.send("welcome")
})

app.listen(3000, () => {
    console.log("server listening on port 3k")
})