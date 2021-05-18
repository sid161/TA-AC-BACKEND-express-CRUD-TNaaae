var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userRouter = require('./routes/user');

mongoose.connect('mongodb://localhost/user-diary-3',{useNewUrlParser: true,useUnifiedTopology: true} ,(err) => {
    console.log(err ? err : "connected to databse");
})

var app = express();



 app.set("view engine", "ejs");
 app.set("views", path.join(__dirname , "views"));

 app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + './public'));

 app.get('/',(req,res) => {
     res.render('index');
 })

 app.use('/users', userRouter);

 

app.listen(4000, () => {
    console.log("Server listening on port 4k");
})