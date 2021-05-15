var express = require('express');
const User = require('../models/User');
var router = express.Router();

app.get('/', (req,res) => {
    User.find({}, (err,users) => {
        if(err) return next(err);
        res.render('users',{users:users})
    })
})

app.get('/:id', (req,res) => {
    var id = req.params.id;
    User.findById(id, (err,user) => {
        if(err) return next(err)
        res.render('userDetail.ejs', {user:user})
    })
})