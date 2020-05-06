const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParse = require('body-parser');

const authRoute = require('./route/routes');
const dataRoute = require('./route/houseData');
const app = express();
const conn = 'mongodb+srv://dbUser:dbUser@cluster0-2pghj.mongodb.net/test?retryWrites=true&w=majority'
const passportSetup =  require('./config/passport-setup')

const multer = require('multer');
const GridFsStorage  = require('multer-gridfs-storage');
const methodOverride = require('method-override');

const spawn =   require('child_process').spawn;



// CONNECTION TO THE MONGODB DATABASE   
mongoose.connect(conn,{ useNewUrlParser: true, useUnifiedTopology: true },(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        
        console.log('database is connected');
    }   
})

// PORT NUMBER TO CONNECT FOLLOOWING HOST . Process.env.PORT to connect heroku server
port = process.env.PORT|| 3000; 

// Cross origin  platform to get data from serve to host in json 
app.use(cors());
app.use(bodyParse.json());



process.stdout.on('data',(data)=>{
    console.log(data.toString()) 
})


app.get('/',(req,res)=>{
    res.send('Server is running');
})

app.use('/api/user',authRoute);
app.use('/data',dataRoute)

app.listen(port,()=>{
    console.log('Serve is running on port number'+port);
})