const mongoose = require('mongoose');


const groupSchema = new mongoose.Schema({

    company_name:{
        type:String
        
    },
    company_discription:{
        type:String
        
    },
    company_email:{
        type:String
    },
    company_number:{
        type:String
    }
})

const Group = module.exports =  mongoose.model('Group',groupSchema  );

 
