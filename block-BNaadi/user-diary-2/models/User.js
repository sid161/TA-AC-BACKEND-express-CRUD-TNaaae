var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String,require:true},
    email: String,
    age:{type:Number,default:0},
    bio: String
}, {timeStamps:true})

var User = mongoose.model('User', userSchema)
module.exports = User;