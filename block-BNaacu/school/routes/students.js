var express = require('express');
var router = express.Router();

router.get('/new',(req,res) => {
    res.send("Form Data");
})

router.post('/', (req,res) => {
    res.send("Student added");
})

router.get('/', (req,res) => {
    res.render('index',{list: ["ankit", "suraj","ravi", "prashant"]})
})

router.get('/student/:id',(req,res) => {
    res.render('studentDetail',{ student : {name:"rahul",email:"rahul@altcampus.io"}});
})