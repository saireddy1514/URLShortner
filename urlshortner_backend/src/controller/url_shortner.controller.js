const url_shortner_model = require("../model/url_shortner.model");
exports.convertShortUrl = (req, res) => {
  url_shortner_model.ShortUrlModel({ link: req.query.link }, (err, data) => {
    if (err) {
      res.status(500).send("Error while converting");
    } else {
      data.changeurl
        ? res.status(200).json({ shorturl: data.shorturl })
        : res.status(200).json({ message: "Unable to convert the url" });
    }
  });
};

exports.fetchMainUrl = (req,res)=>{
  url_shortner_model.getMainUrl({link:req.params.url},(err,data)=>{
    if (err) {
      res.status(500).send("Error while fetching");
    } else {
      if(data.findurl){
      res.redirect(data.url);
      }
      else{
        res.status(200).send("Unable to find this link")
      }
    }
  })
}
