var express = require('express');
const User = require('../models/User');
var model = require('../models/User');
var mongoose = rewuire('mongoose');
var router = express.Router();

router.get('/:id/delete', (req,res,next) => {
    var id = req.params.id;
    User.findByIdAndDelete(id,(err,delUser) => {
        if(err) return next(err)
        res.redirect('/user');
    })
})
