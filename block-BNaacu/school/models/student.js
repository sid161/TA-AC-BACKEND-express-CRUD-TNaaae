var mongoose = require('mongoose');
var Schema = mongoose.Schema

var studentSchema = new Schema(
    {
        name: String,
        address: String,
        age: Number
    }
)

var  Student = mongoose.model('Student',studentSchema);
module.exports = Student;