var express = require("express");
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    email: String,
    age: Number
})

var User = mongoose.model('User', userSchema)
module.exports = User;