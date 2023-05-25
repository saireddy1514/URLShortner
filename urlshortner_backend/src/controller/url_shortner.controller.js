const url_shortner_model = require("../model/url_shortner.model");
exports.convertShortUrl = (req, res) => {
  url_shortner_model.ShortUrlModel({ link: req.body.link }, (err, data) => {
    if (err) {
      res.status(500).send("Error while converting");
    } else {
      data.changeurl
        ? res.status(200).json({ status:true,shorturl: data.shorturl })
        : res.status(200).json({ status:false,message: "Unable to convert the url" });
    }
  });
};

exports.fetchMainUrl = (req,res)=>{
  url_shortner_model.getMainUrl({link:req.params.url},(err,data)=>{
    if (err) {
      res.status(200).send({status:false,msg:"Error while fetching"});
    } else {
      if(data.findurl){
      res.status(200).send({status:true,url:data.url});
      }
      else{
        res.status(200).send({status:false,msg:"Unable to find this link"})
      }
    }
  })
}
