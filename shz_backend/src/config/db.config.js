const mongoose = require('mongoose');
async function connectToDB(){
    try{
        mongoose.connect(process.env.DB_URL,{useNewUrlParser:true}).then(()=>{console.log("Database connection established")}).catch((err)=>{console.log(err)})

    }
    catch(err){
        throw err;
    }
}
module.exports = connectToDB;