const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Exitexam")

const Schema = mongoose.Schema;
const UserSchema = new Schema({

    email:String,
    otp:Number,
    
});

var userdata = mongoose.model('userdatas' , UserSchema)
module.exports =userdata
