# -*- coding: utf-8 -*-
"""
Created on Thu Feb 27 22:14:24 2020

@author: Karan
"""

import pandas as pd
from pymongo import MongoClient
import numpy as np
import random

data = pd.read_excel('demo.xlsx');

print(data);



    
cluster = MongoClient("mongodb+srv://dbUser:dbUser@cluster0-2pghj.mongodb.net/test?retryWrites=true&w=majority")

db =  cluster["test"]

collection = db["homes"]

society = ["soc1","soc2","soc3","soc4","soc5","soc6","soc7","soc8","soc9","soc10","soc11","soc12","soc13","soc14","soc15","soc16","soc17","soc18","soc19","soc20","soc1","soc1","soc1","soc1","soc1","soc1","soc1",];
groups= [" Larsen and Toubro"," Tata Group","Jaiprakash Associates"," Lanco Infratech","Reliance Infrastructure Limited",
                "Hindustan Construction Company","Gammon","Afcons"," Shobha Developers","Punj Lloyd","Ivrcl","soma","Simplex Infrastructures Ltd.",
                "GMR Infrastructure","NCC","Gvk Power & Infrastructure Limited","Irb Infrastructures","Patel Engineering"," "]

    


for index,row in data.iterrows():
    data.replace(row[4],random.choice(society),inplace=True)
     
    rec={
    "area_type":row[0],
    "availability":row[1],
    "location":row[2],
    "constructionGroup":random.choice(groups),
    "size":row[3],
    "society":random.choice(society),
    "sqft":row[5],
    "bathroom":row[6],
    "balcony":row[7],
    "price":row[8]
    }
    collection.insert_one(rec)
    print(rec)
    
    

