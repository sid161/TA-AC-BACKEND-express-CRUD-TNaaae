var express = require('express');
var router = express.Router();

router.get('/new',(req,res) => {
    res.render('studentsForm.ejs');
})

router.post('/', (req,res) => {
    console.log(req.body);
    res.send("req.body");
})

router.get('/', (req,res) => {
    res.render('list.ejs',{list: ["ankit", "suraj","ravi", "prashant"]})
})

router.get('/student/:id',(req,res) => {
    res.render('studentDetail',{ student : {name:"rahul",email:"rahul@altcampus.io"}});
})

module.exports = router;