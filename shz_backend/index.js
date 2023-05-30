const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

dotenv.config();

// Mongodb Configuration
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true}).then(()=>{console.log("Database connection established")}).catch((err)=>{console.log(err)})

// 
require('./src/routes/shz.route')(app);

// Route testing api
app.get('/',(req,res)=>{
    res.send("Hello, world!");
});

//Port Running
app.listen(process.env.SERVER_PORT,()=>{
    console.log("Listening on port: "+process.env.SERVER_PORT);
})