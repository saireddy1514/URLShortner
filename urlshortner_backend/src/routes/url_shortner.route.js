const urlShortnerController = require("../controller/url_shortner.controller");
module.exports = (app) => {
  app.post("/api/convertShort", urlShortnerController.convertShortUrl);  //convert the mainurl into shorturl
  app.get("/api/:url",urlShortnerController.fetchMainUrl); // fetching mainurl from shorturl
  app.post("/api/login",urlShortnerController.loginController); // login user
  app.post("/api/register",urlShortnerController.registerController); // register user
  app.post("/api/otpverify",urlShortnerController.otpverifyController); // otp verification
};
