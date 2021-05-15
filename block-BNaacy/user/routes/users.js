var express = require('express');
const User = require('../models/user');

var router = express.Router();

router.get('/', (req,res) => {
    res.render('userForm.ejs');
})

router.post('/', (req,res) => {
    console.log(req.body);
    User.create('req.body',(err,createdUser) => {
        if(err) return next(err)
        res.redirect('/users');
    })
})

router.get('/new', (req,res) => {
    res.render()
})

module.exports = router;