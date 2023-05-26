const urlSchema = require('../schemas/url_shortner.schema');
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