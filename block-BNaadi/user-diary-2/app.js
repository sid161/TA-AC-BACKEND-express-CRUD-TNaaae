var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
const User = require('../user-diary-2/models/User');


mongoose.connect('mongodb://localhost/user-diary-2', (err) => {
    console.log(err ? err : 'Connected to database');
})
var app = express();
app.use(express.static('__dirname' + 'public'));
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));

// app.get('/', (req,res) => {
//     res.send("welcome");
// })

app.use((req,res,next) => {
    res.status('404').send('Page not found');
})

app.use((err,req,res,next) => {
    res.send(err);
})


app.listen(4000, () => {
    console.log("Server listening on port 4k")
})