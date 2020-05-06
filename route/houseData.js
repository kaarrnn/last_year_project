const express = require('express')
const router1 = express.Router();
const puppeteer = require("puppeteer");

// MODALS
const Home = require('../models/home');
const group = require('../models/group');
    // temp
router1.get('/',(req,res)=>{
    res.send('112');
})

//  INSERTING HOUSE DETAILS

router1.post('/addHouse',(req,res)=>{
    const house = new Home({
        area_type:req.body.area_type,
        availability:req.body.availability,
        location:req.body.location,
        size:req.body.size,
        society:req.body.society,
        total_sqft:req.body.total_sqft,
        bath:req.body.bath,
        balcony:req.body.balcony,
        price:req.body.price

    })
    console.log(house);
    house.save();
    res.send(house);
})


// getting details with 2-3 bathrooms

router1.post('/getbath',(req,res)=>{
    var x;
    console.log(typeof req.body.bathroom)
    Home.find({bathroom : parseInt(req.body.bathroom)},function(err,x){
        if(err) throw err;
        else{
            console.log(x);        
        }
        res.send(x)

    })
})


// getting details with  2-3 balcony
router1.get('/getbalcony',(req,res)=>{
    var x;
    console.log(typeof req.body.balcony)
    Home.find({balcony : parseInt(req.body.balcony)},function(err,x){
        if(err) throw err;
        else{
            console.log(x); 
            
        }
        res.send({"g" : x, "y":1});

    })

})

// GETTING ALL THE HOUSES WITH AVAILABILITY OF READY TO MOVE 
    router1.get('/getAvailability',(req,res)=>{
        console.log("Inside getAvailability");
        Home.find({"availability":"Ready To Move"},function(err,ReadyToMove){
            if(err) throw err
            else{
           //     console.log(ReadyToMove)
                res.send(ReadyToMove)
            }   
        })
    })
    
    
    // getting house with 2000+ sqft 
router1.get('/get2000plussqft',(req,res)=>{
    console.log('Inside get2000plussqft');
    Home.find({"sqft":{$gt:2000}},function(err,sqft_2000plus){
        if(err) throw err
        else{
           // console.log(sqft_2000plus);
            res.send(sqft_2000plus)
        }
    })
})  

// scapping news from housing.com
router1.get('/getNews',(req,res)=>{

//console.log("Inside news");
(async () => {
    try{
        let newsURL = 'https://housing.com/news/how-is-the-real-estate-industry-responding-to-the-covid-19-impact-on-construction-workers/';
        let browser = await puppeteer.launch();
        let page = await  browser.newPage();
        await page.goto(newsURL);
    
        let data = await page.evaluate(()=>{
            let title  = document.querySelector('h1[class="entry-title"]').innerText ;
            let discription = document.querySelector('div[class="entry-subtitle"]').innerText ;
            let writter = document.querySelector('span[class="author vcard"] > a').innerText;
        let time = document.querySelector('time').innerText;
        let title1 = document.querySelector('span[id]').innerText;
        let discription1 = document.querySelector('div[class="entry-content"] > p').innerHTML;

            return {
                title,
                discription,
                writter,
                time,
                title1,
                discription1
            }
        })
        console.log(data);
        res.send(data)
        
        debugger;
        /// await browser.close();
    }
    catch(error){
        console.log(error);
    }
    })();
    

})
   

// gettting comany information to disply company details
router1.post('/getCompanyInfo',(req,res)=>{
    console.log(req.body.company);

    group.find({"company_name":req.body.company},function(err,company){
        if(err) throw err
        else{
            //console.log(company)
            res.send(company);
        }   
    })



    
})

module.exports = router1;