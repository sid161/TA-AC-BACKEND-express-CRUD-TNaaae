var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/',(req,res) => {
    User.find({},(err,users) => {
        if(err) {
            console.log(err)
        } else{
            res.render('users', {users:users})
        }
        
    })
})

router.get('/new', (req,res) => {
    res.render('newUser.ejs');
})


router.post('/', (req,res) => {
    console.log(req.body);
    User.create(req.body, (err,data) => {
        if(err) {
            console.log(err);
        } else{
            res.redirect('users');
        }
        
    })
})




router.get('/:id', (req,res) => {
    var id = req.params.id;
    User.findById(id,(err,user) => {
        if(err) {
            console.log(err)
        }
        else {
            res.render('singleUser.ejs', {user:user});
        }
    })
})

router.get('/:id/edit', (req,res) => {
    var id = req.params.id;
    User.findById(id, (err,user) => {
        if (err) {
            console.log(err)
        } else{
            res.redirect('updateUser.ejs', {user:user});
        }
        
    })
})

router.post('/:id',(req,res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err,user) => {
        if(err) {
            console.log(err)
        } else{
            res.redirect('/users' + id);
        }
        
    })
})

module.exports = router;