const mongoose = require('mongoose');
const schema = mongoose.Schema;
const otpSchema = new schema({
    email: {type:String,required:true},
    otp: {type:String,required:true}
})
module.exports = mongoose.model('otp', otpSchema);
