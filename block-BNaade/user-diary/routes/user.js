var express = require('express');
var router = express.Router();
var User = require('.//models/User');

router.get('/:id/edit', (req,res,next) => {
    var id = req.params.id;
    User.findById(id, (err,user) => {
        if(err) return next(err)
        res.render('editBookForm', {user:user})
    })
})
 router.post('/:id', (req,res) => {
     var id = req.params.id;
     User.findByIdAndUpdate(id,req.body, (err,updatedUser) => {
         if(err) return next(err)
         res.redirect('/books/' + id);
     })
 })