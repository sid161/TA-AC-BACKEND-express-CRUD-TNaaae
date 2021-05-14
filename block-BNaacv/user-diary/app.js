const { urlencoded } = require('express');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/user-diary', (err) => {
    console.log("Connected to databse");
})

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"))

//app.use('/',require('./routes/users'))
app.use('/users', require('./routes/users'))

app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.send('welcome');
})

app.listen(4000, () => {
    console.log("Server listening on port 4k");
})
