var express = require('express');
var router = express.Router();

router.get('/',(req,res) =>{
    res.render('users.ejs', {user: ['name','email']} )
    })


router.get('/users/:id', (req,res) => {
    res.render("singleUser", {
        
    })
})

router.get('/new', (req,res) => {
    res.render('userForm.ejs')
})

router.post('/',(req,res) => {
  console.log(req.body);
  res.send(req.body);

})

router.delete('/users/:id',(req,res) => {

})

router.put("/users/:id", (req,res) => {

})

module.exports = router