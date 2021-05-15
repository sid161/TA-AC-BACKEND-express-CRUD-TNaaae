var express = require('express');
var mongoose = require('mongoose');
var path = require('path');


mongoose.connect('mongodb://localhost/user3', (err) => {
    console.log("Database Connected");
})

var app = express();

app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , 'views'))

app.use('/users', require('./routes/users'))

app.get('/', (req,res) => {
    res.send("Welcome");
})

app.use((req,res,next) => {
    res.send('Page not found')
})

app.use((err,req,res,next) => {
    res.send("error present")
})

app.listen(3000, () => {
    console.log("Server listening on port 3k");
})