var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');



mongoose.connect(
    'mongodb://localhost/user-diary-2',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Database Connected');
      }
    }
  );
var app = express();


app.set("view engine", "ejs");
app.set("views", (__dirname + "/views"));

app.use(express.static('__dirname' + '/public'));
app.use(express.json());
app.use(express.urlencoded());

// app.get('/', (req,res) => {
//     res.send("welcome");
// })
app.use('/', indexRouter);
app.use('/users', userRouter);

app.use((req,res,next) => {
    res.status('404').send('Page not found');
})

app.use((err,req,res,next) => {
    res.send(err);
})


app.listen(3000, () => {
    console.log("Server listening on port 4k")
})