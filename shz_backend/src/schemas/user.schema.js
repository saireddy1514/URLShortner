const mongoose = require('mongoose');
const schema  = mongoose.Schema;
//
const userSchema = new schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    emailVerify:{type:Boolean,default:false,required:true},
    password:{type:String,required:false},
    msg:{type:String,required:true}
})

module.exports = mongoose.model('Users',userSchema);