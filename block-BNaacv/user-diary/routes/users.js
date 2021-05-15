var express = require('express');
var router = express.Router();

router.get('/',(req,res) =>{
    res.render('users.ejs', {user: ['name','email']} )  // list user
    })


router.get('/users/:id', (req,res) => {   // single user detail
    res.render("singleUser", {

    })
})

router.get('/new', (req,res) => {   // userForm
    res.render('userForm.ejs')
})

router.post('/',(req,res) => {   // deta
  console.log(req.body);
  res.send(req.body);

})

router.delete('/:id',(req,res) => {

})

router.put("/users/:id", (req,res) => {

})

module.exports = router