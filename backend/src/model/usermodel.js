const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:user123@project1.cfkyt.mongodb.net/ExitExam?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
const UserSchema = new Schema({

    email:String,
    otp:Number,
    
});

var userdata = mongoose.model('userdatas' , UserSchema)
module.exports =userdata