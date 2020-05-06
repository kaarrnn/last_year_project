const mongoose = require('mongoose');


const houseSchema = new mongoose.Schema({

    area_type:{
        type:String
        
    },
    availability:{
        type:String
        
    },
    location:{
        type:String
        
    },
    size:{
        type:String
    
    },
    society:{
        type:String
    
    },
    tatal_sqft:{
        type:Number
    
    },
    bath:{
        type:String
    },  
    balcony:{
        type:Number
    },
    price:{
        type:Number
    }
   
})

const Home = module.exports =  mongoose.model('Home',houseSchema);

 
