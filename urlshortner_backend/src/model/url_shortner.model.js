const urlSchema = require('../schemas/url_shortner.schema');
const helper = require('../helpers/url_shortner.helpers');
const randomstring = require("randomstring"); //random string library for randomstring generation
var randomurl="";


exports.ShortUrlModel=(shorturlmodel,result)=>{
    try{
        randomurl = randomstring.generate(7)
        let url = helper.checkshorturl(randomurl); //helper function to check the shorturl is already there or not.
        url.then(value =>{
            if(value.length>0){
                new urlSchema({
                    mainurl:shorturlmodel.link,
                    shorturl:value
                }).save()
                result(null,{shorturl:value,changeurl:true})
            }
            else{
                result(null,{changeurl:false})
            }  
        })
     
    }
    catch(err){
        result(err,null);
    }
}

exports.getMainUrl=(getmainurl,result)=>{
    try{
        urlSchema.findOne({shorturl:getmainurl.link}).then(data=>{
            if(data===null){
                result(null,{findurl:false})
            }
            else{
                result(null,{findurl:true,url:data.mainurl})
            }
        })
    }
    catch(err){
        result(err,null);
    }
}