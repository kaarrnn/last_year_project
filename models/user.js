const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    username:{
        type:String,
         required:true,
         min:6,
         max:255
    },
    email:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    conformPassword:{
        type:String,
        required:true,
        min:6
    },
    Date:{
        type:Date,
        default:Date.now
    }
})


const User = module.exports =  mongoose.model('User',userSchema);


module.exports.checkPassword = function(password,conformPassword){
    if(password == conformPassword){
        return true
    }
    else{
        return false    
    }
}

module.exports.getUserByEmail = function(email,callback){
    const query = {email:email}
    User.findOne(query,callback)
}

module.exports.comparePassword = function(candidatePassword,hash,callback){

    console.log('INSIDE COMPARE PASSWORD');
    
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch); 
    })

}

