const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDB = require('./src/config/db.config');

const app = express();
app.use(express.json());
app.use(cors())

dotenv.config();

// Mongodb Configuration
async function startServer() {
    try {
      await connectToDB();
    } catch (error) {
      console.error('Failed to start the server', error);
    }
  }
startServer();
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