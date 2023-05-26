const urlShortnerController = require("../controller/url_shortner.controller");
module.exports = (app) => {
  app.post("/api/convertShort", urlShortnerController.convertShortUrl);  //convert the mainurl into shorturl
  app.get("/api/:url",urlShortnerController.fetchMainUrl); // fetching mainurl from shorturl
};
