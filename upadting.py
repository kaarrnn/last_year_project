# -*- coding: utf-8 -*-
"""
Created on Sat Apr 18 16:50:48 2020

@author: Karan
"""


import pandas as pd
from pymongo import MongoClient
import numpy as np
import random


data = pd.read_excel('demo.xlsx');


society = ["soc1","soc2","soc3","soc4","soc5","soc6","soc7","soc8","soc9","soc10","soc11","soc12","soc13","soc14","soc15","soc16","soc17","soc18","soc19","soc20","soc1","soc1","soc1","soc1","soc1","soc1","soc1",];

# print(data)
print('-------------------------')  
for index,row in data.iterrows():
    data.replace(row[4],random.choice(society),inplace=True)
    print(row[4])
    
print('-------------------------------------------')
for index,row in data.iterrows():
    print(row)
    
data.to_excel('C:\Users\Karan\Desktop/demo.xlsx')