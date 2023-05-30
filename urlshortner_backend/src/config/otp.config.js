const nodemailer = require('nodemailer');
const path = require("path")
const { hbsEmail } = require('handlebars-email')

let transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    port:process.env.MAIL_PORT,
    auth:{
        user: process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
});

const sendOtp = async function sendData(to,subject,otp){
    const template = path.join(__dirname, './templates/OtpTemplate.hbs');
    const context = {otpNum: otp}
    const eMailtemplate = hbsEmail( template, context )
    try {
        let info = await transporter.sendMail({
          from: process.env.MAIL_USER,
          to: to,
          subject: subject,
          html: eMailtemplate
        });
      } catch (e) {
        console.log("SMTP Error: 001 - " + e.message);
      }   
}

module.exports ={sendOtp}