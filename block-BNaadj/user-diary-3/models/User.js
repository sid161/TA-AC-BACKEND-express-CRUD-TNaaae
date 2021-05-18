var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    age:Number,
    address:String,
    bio:String,
    hobbies:[String]
})

var User = mongoose.model('User', userSchema);

module.exports = User;