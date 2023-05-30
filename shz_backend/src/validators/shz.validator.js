var emailvalidator = require('email-validator');
exports.emailValidate =(email)=>{
    if(emailvalidator.validate(email)){
        return {status:true,msg:"Email is valid"}
    }
    else{
        return {status:false,msg:"Email is not valid"}
    }
}

exports.nameValidator = (name)=>{
    if(/[a-zA-Z][a-zA-Z ]+/.test(name)){
        return {status:true,msg:"Name is valid"}
    }
    else{
        return {status:false,msg:"Name is not valid"}
    }
}

exports.passwordValidator = (password)=>{
    if(password.length>=8){
        return {status:true,msg:"Password is valid"}
    }
    return {status:false,msg:"Password length should be greater than 8 characters"}
}