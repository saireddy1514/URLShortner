const urlSchema = require('../schemas/url_shortner.schema');
const randomstring = require("randomstring");
var randomurl="";

exports.checkshorturl= async (url)=>{

    await urlSchema.findOne({shorturl:url}).then((shorturls)=>{
        if(shorturls===null){
            randomurl=url;
        }
        else{
            randomurl = randomstring.generate(7);   
        }
      
    })
    .catch((err)=>{
        console.log(err);
    })
    return randomurl;
   
}