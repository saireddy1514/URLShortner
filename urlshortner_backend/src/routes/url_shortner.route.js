const urlShortnerController = require("../controller/url_shortner.controller");
module.exports = (app) => {
  app.post("/api/convertShort", urlShortnerController.convertShortUrl);
  app.get("/api/:url",urlShortnerController.fetchMainUrl);
};
