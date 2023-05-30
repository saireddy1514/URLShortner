const urlSchema = require('../schemas/url_shortner.schema');
const userSchema = require('../schemas/user.schema');
const otpSchema = require('../schemas/otp.schema');
const helper = require('../helpers/url_shortner.helpers');
const otpConfig = require('../config/otp.config');
const validator = require('../validators/url_shortner.validator');

const randomstring = require("randomstring"); //random string library for randomstring generation
const bcrypt = require('bcrypt');
var randomurl="";
const saltRounds = 10;


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

exports.loginModel =(loginresult,result)=>{
    try{
        var email = loginresult.data.email;
        var password = loginresult.data.password;
        userSchema.findOne({email:email}).then((found)=>{
            if(found===null){
                result(null,{status:false,msgs:["Email Not Found"]})
            }
            else{
                if(found.emailVerify){   
                    bcrypt.compare(password,found.password).then((response)=>{
                        if(response){
                            result(null,{status:true})
                        }
                        else{
                            result(null,{status:false,msgs:["Password is incorrrect"]})
                        }
                    })
                }
                else{
                result(null,{status:false,msgs:["Email Not Verified"]})
                }
            }
        })
    }
    catch(err){
        result(err,null);
    }
}
exports.registerModel =(registerresult,result)=>{
    try{
        var emailvalidate = validator.emailValidate(registerresult.data.email);
        var namevalidate = validator.nameValidator(registerresult.data.name);
        var passwordvalidate = validator.passwordValidator(registerresult.data.password);
        if(emailvalidate.status && namevalidate.status && passwordvalidate.status){
            helper.checkEmail(registerresult.data.email).then((mailstatus)=>{
            if(mailstatus){
                registerresult.data['msg']="Register Through Form";
                let otp=Math.floor(100000 + Math.random() * 900000);
                bcrypt.hash(registerresult.data.password, saltRounds, function(err, hash) {
                        if(err){
                            result(err,null);
                        }
                        else{
                            registerresult.data["password"]=hash
                            new userSchema(registerresult.data).save()
                            new otpSchema({email:registerresult.data.email,otp:otp}).save()
                            otpConfig.sendOtp(registerresult.data.email,"SHZ - One Time Password(OTP)",otp);
                            result(null,{status:true});        
                        }
                });
            }
            else{
                result(null,{status:false,msgs:["Email already registered"]});
            }
        })
 
        }
        else{
            var requesterrors = [];
            if(!emailvalidate.status){
                    requesterrors.push(emailvalidate.msg);
            }
            if(!namevalidate.status){
                requesterrors.push(namevalidate.msg);
            }
            if(!passwordvalidate.status){
                requesterrors.push(passwordvalidate.msg);
            }
            result(null,{status:false,msgs:requesterrors});
        }
    }
    catch(err){
        result(err,null);
    }
}

exports.otpverifyModel =(otpresult,result)=>{
    try{
        let email = otpresult.data.email;
        let otp = otpresult.data.otp;

        otpSchema.findOne({email: email}).then((otpfind)=>{
                if(otpfind===null){
                    result(null,{status:false,msgs:["Email not found"]});
                }
                else{
                    if(otpfind.otp===otp){
                        userSchema.findOne({email:email}).then((finduser)=>{
                            if(finduser===null){
                                result(null,{status:false,msgs:["Email not found to update the verificaton status"]});
                            }
                            else{
                                userSchema.updateOne({emailVerify:true}).then((updateverification)=>{
                                    if(updateverification===null){
                                        result(null,{status:false,msgs:["Error while updating the verification status"]});
                                    }
                                    else{
                                        result(null,{status:true});
                                    }
                                })
                                .catch((error)=>{
                                    result(error,null);
                                })                                    
                            }
                        })
                        .catch((err)=>{
                            result(err,null);
                        })
                    }
                    else{
                    result(null,{status:false,msgs:["OTP is Incorrect"]});
                    }

                }
        }).catch(err=>{ result(err,null);})

    }
    catch(err){
        result(err,null);
    }
}