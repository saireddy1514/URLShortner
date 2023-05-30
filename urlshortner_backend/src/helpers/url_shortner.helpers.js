const urlSchema = require('../schemas/url_shortner.schema');
const userSchema = require('../schemas/user.schema')
const randomstring = require("randomstring");
var randomurl="";

exports.checkshorturl= async (url)=>{

    await urlSchema.findOne({shorturl:url}).then((shorturls)=>{  //checking for string exists
        if(shorturls===null){
            randomurl=url;
        }
        else{
            // if exists then update the string with new random url string
            randomurl = randomstring.generate(7);    
        }
      
    })
    .catch((err)=>{
        console.log(err);
    })
    return randomurl;
   
}


exports.checkEmail = async (email)=>{
    var statuscheck=false;
    await userSchema.findOne({email:email}).then((emailcheck)=>{
        if(emailcheck===null){
            statuscheck=true;
        }   
        else{
            statuscheck=false;
        }    
    }).catch((err)=>{console.log(err);})
    return statuscheck;
}