const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true}).then(()=>{console.log("Database connection established")}).catch((err)=>{console.log(err)})


require('./src/routes/url_shortner.route')(app);

app.get('/',(req,res)=>{
    res.send("Hello, world!");
});


app.listen(process.env.SERVER_PORT,()=>{
    console.log("Listening on port: "+process.env.SERVER_PORT);
})