const mongoose = require('mongoose');
const schema = mongoose.Schema;
// Url Schema
const shortUrlSchema = new schema({
    mainurl:String,
    shorturl:String,
})
module.exports=mongoose.model('Urls',shortUrlSchema);