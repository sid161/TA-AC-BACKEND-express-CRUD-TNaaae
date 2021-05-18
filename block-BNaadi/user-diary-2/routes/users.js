var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.post('/',(req,res) => {
    User.create(req.body, (err,user) => {
        if (err) return next(err)
        res.redirect('users');
    })
})

router.get('/', (req,res) => {
   User.find({}, (err, users) => {
       if(err) return next(err)
       res.render('listUsers', {users:users})
   })
})



router.get('/:id', (req,res) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err)
        res.render('singleUser', {user:user})
    })
})

router.put('/:id', (req,res,next) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id,req.body, (err,user) => {
        if(err) return next(err)
        res.redirect('/listusers/' + id);
    })

})

router.delete('/:id', (req,res,next) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err,user) => {
        if(err) return next(err)
        res.redirect('/listusers');
    })
})

module.exports = router;