const express = require('express')
const router = express.Router();

const User = require('../models/user')
const Home = require('../models/home');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var localStorage = require('localStorage')


    const spawn =   require('child_process').spawn;

//const House = require('..models/house');

// CONFIGRATION TO UPLOAD A PROFILE PHOTO

// set storage engine:
const multer = require('multer');
const GridFsStorage  = require('multer-gridfs-storage');
const methodOverride = require('method-override');

const storage = multer.diskStorage({
    destination:'./public/',
    filename:function(req,file,cb){
        cb(null,filename.feildname +'-'+Data.now()+Path.extname(file.originalname));
    }
})


//  init upload 
// const upload = multer({
//     storage:storage
// }).single('myImage');

const upload = multer({storage:storage});


// TESTING
router.get('/',(req,res)=>{
    res.send('hello from router');
})

// REGISTER MODULE

router.post('/register',async (req,res)=>{  

    const checkPassword = User.checkPassword(req.body.password,req.body.conformPassword);
    const emailExist = User.findOne({email:req.body.email});

    if(emailExist == null){
        return res.status(400).send('Email Already Exist');
    }
    if(checkPassword){
        const salt = await bcrypt.genSalt(10);
        const hashPassword =await bcrypt.hash(req.body.password,salt);

    
    const user =  new User({
        username:req.body.username,
        email:req.body.email,
        phone:req.body.phone,
        password:hashPassword,
        conformPassword:hashPassword,
        date:req.body.date
    })

    console.log(user);
        try{
            user.save();
            res.send(user)
        }
        catch(err){
            res.send(400).send(err)
        }
    }   
    else{
        return res.status(400).send('Password Do not Match')
    }
})

// LOGIN MODULE
router.post('/login',(req,res)=>{
    
    const email =  req.body.email
    const password = req.body.password

    var spwan2 = require("child_process").spawn;
    const process = spwan2('python',["./route/mail_demo.py"]);

    //console.log(process)
    //console.log(process.stdout.data)
    
    process.stdout.on('data',(data)=>{
    
        console.log(data.toString())
        
       
    
    })

    console.log('inside login')
    User.getUserByEmail(email,(err,user)=>{
        if(err) throw err
        if(!user){
            console.log('User not found');
            return res.json({success:false,msg:'User not found'})
        }
        else{
            console.log('user found')
        }
        
        User.comparePassword(password,user.password,(err,isMatch)=>{
            console.log('inside compare password');
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(),'swqqwfcsdsdc',{
                    expiresIn:604800
                });
                res.json({
                    success:true,
                    token:'JWT'+token,
                    email:user.email
                });
                console.log('loginn Success');
            
            }
            else{
                return res.json({success:false,msg:'password do not match'});
            }   
        })
    })

    

    
})

router.post('/upload',upload.single('file'),(req,res)=>{   
    // console.log('hello there from upload');
    
    // upload(req,res,(err)=>{
    //     if(err){
    //         console.log(err);
    //     }       
    //     else{
    //         console.log(req.file);
    //         res.send('hii')
    //     }
    // })

})  

// router.get('/getuser',(req,res)=>{
//     const email = localStorage.getItem('user')
    
//     console.log('Email',email)


// })





module.exports = router;