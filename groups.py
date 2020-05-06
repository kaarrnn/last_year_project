# -*- coding: utf-8 -*-
"""
Created on Thu Feb 27 22:14:24 2020

@author: Karan
"""

import pandas as pd
from pymongo import MongoClient
import numpy as np
import random

    
cluster = MongoClient("mongodb+srv://dbUser:dbUser@cluster0-2pghj.mongodb.net/test?retryWrites=true&w=majority")

db =  cluster["test"]

collection = db["groups"]


companies_name=[" Larsen and Toubro"," Tata Group","Jaiprakash Associates"," Lanco Infratech","Reliance Infrastructure Limited",
                "Hindustan Construction Company","Gammon","Afcons"," Shobha Developers","Punj Lloyd","Ivrcl","soma","Simplex Infrastructures Ltd.",
                "GMR Infrastructure","NCC","Gvk Power & Infrastructure Limited","Irb Infrastructures","Patel Engineering"]

companies_description=["This is one among Top 20 construction companies in India and is Very well known as l&t, the company Larson and you bro are the topmost engineering company in the co. The company is known as an Indian multinational conglomerate and was found in the year 1938. Their aim is to provide contractions, engineering, information technology, manufacturing good and financial. This is India’s biggest construction company.",
                       "This company is owned by the famous Tata groups. This company is one of the fastest-growing and best-valued companies in the country and counted among the Top 20 construction companies in India. They expertise are big and critical industrial infrastructures project that operates via strategies business units including urban infrastructures, industrial infrastructures, utility services and quality services.",
                       "The company has a plethora of big-ticket projects in its kitty and is one of the Top 20 construction companies in India. It has two contracts worth rs2,079 crore to construct the 990mw punatsangchhu ii hydro- electric project, Bhutan. This hydroelectric project will be jointly implemented by the royal government of Bhutan and the government of India. Its first contract pertains to the construction of diversion tunnel, dam intake and delisting arrangement including hydro-mechanical works and highway tunnel for a contract value of rs1,224 crore.",
                       "The group’s construction vertical bagged the first metro project for engineering, procurement, and construction from Chennai metro rail limited. And is counted among Top 20 construction companies in India. Its solar vertical achieved the financial closures of the 30 MW PV project in Gujarat, the 5 MW PV and the 100 MW solar thermal projects in Rajasthan. An 80 kW grid-connected solar photovoltaic power plant built by Lanco solar at the Indian parliament complex was recently inaugurated.",
                       "Reliance Infrastructure is one of India’s largest private sector infrastructure developers and part of the Reliance group with revenues of overall assets of Rs 26,050 crores power generation units at dahanu, samalkot, goa and Kochi continue to demonstrate significant improvements across major operational, environmental and safety performance parameters and is considered among Top 20 construction companies in India The group is developing five transmission projects worth about Rs 7,000 crore, making it the largest private player in the transmission sector.",
                       "This famous construction company has its headquarters located in the trading capital of the country, Mumbai. They are the high gun in the field such are real estate, engineering, and construction, urban development, management and construction of infrastructures. The company was started in the year 1926, it has constructed large scale and also budget infrastructures and civil projects like the tunnel, nuclear power plants, hydro power plants, highways, expressway, and bridges. Top 20 construction companies in India add this name to their list.",
                       "This company is known for its construction of too big mega projects all over India. They are constructing a lot of buildings in the past decades and is the Top 20 construction companies in India. The ‘ gateway of India’ is one of the most famous and significant contributions of this company to the country. Their structures are considered to be of great iconic view.",
                       "The company was initiated in the year 1959. It happened when hajrats and co. And rodeo Foundation engineering limited from Switzerland came together to make radio hazarat and co for the under taking of construction works. Currently, it is owned by Shapoorji Pallonji group that is the third-biggest construction company in the country.",
                       "This is one of the famous real estate developer engaged in the business of sale, development, construction, operation, management, housing project, township commercial activities and other related actions. The headquarters of this company is located in Bangalore.",
                       "This is one of the leading Indian engineering and construction company handling integrated design, project management and procurement service for infrastructure and energy sector project. The company is located all over in the middle east, Caspian, south Asia, Africa and Europe. And is considered as Top 20 construction companies in India",
                       "This company is one of the fastest-growing civil engineering companies in the country and is one among the Top 20 construction companies in India. This company is known for manufacturing amazing humongous mega structures. This company has a set of excellent quality service providers who are very expertise in this field. Thus the company stands in the 11 position.",
                       "This company is one of the top considered as one of the top-notch civil construction company in India. It was started in the year 2003 and now it has about 13 years of technical experience in this field. The company contains an excellent set of talented people working for them to provide solutions. Thus, this company stands in 9th position. It is one of the Top 20 construction companies in India",
                       "Established in the year 1924. Even now it has successfully satisfied all the clients making it one of the best companies. They have an experience of about 90 and more year in the field of construction industries and are one amongst the Top 20 construction companies in India. They have successfully completed about 2600 mega projects they undertook.",
                       "Its net revenue of male international airport, which was taken over in November 2010 stood at Rs 225 crore. It earned higher revenues from the energy sector, which stood at rs103 crore, up 18%.The quarter started on a strong note as its airport assets experienced a robust traffic growth and the energy assets turned out quite healthy. Making it among the Top 20 construction companies in India.",
                       "The group won awards aggregating to rs629 crore in various segments. The first-order worth rs399 crore was from the water resources division Raigarh, Chhattisgarh for the construction of sporadic barrage with vertical lift gates. The second order worth rs159 crore came from Maharashtra state electricity distribution co. Ltd (msedcl), Mumbai, which involved turnkey contracts for single phasing scheme.",
                       "Gvk is a leading Indian conglomerate with diversified interests across various sectors including energy, resources, airports, transportation, hospitality and life sciences. It has taken pioneering initiatives across many sectors that it operates in and has overcome every challenge to provide reliable infrastructure to contribute to the country’s growth. And is one among the Top 20 construction companies in India.",
                       "On a consolidated basis, IRB Infrastructure reported a stellar performance on all fronts. Its top line growth was led by a whopping 80.9% year-on-year jump, and the bottom line also reported an impressive performance on account of the robust top-line growth, and other higher income.making it the Top 20 construction companies in India",
                       "Pate engineering ltd., founded in 1949, is one of the major infrastructure and construction services company in India. They have a breadth of experience encompassing all sectors of the infrastructure industry from dams, tunnels, micro-runnels, hydroelectric projects, irrigation projects, highways, roads, bridges, railways, refineries to real estates and townships. They are one of the Top 20 construction companies in India."]

companies_address=["Shirish, 16,South ambazari road,Laxmi Nagar, Nagpur, Maharashtra",
                   "vip colony, dhanbad, jharkhand 828103",
                   "sahibabad industrial areasite 4, sahibabad, ghaziabad, uttar pradesh 201010",
                   "397, udyog vihar iii, sector 20, gurugram, haryana 122016",
                   "business tower,unit-6,6th floor,206, a j c bose road, Kolkata, west Bengal 700017",
                   "Rincon house,lbs marg, Vikhroli (w),Mumbai, Maharashtra 400083",
                   "karmayog building annex, parsi panchayat road, jijamata colony, andheri east, mumbai, maharashtra 400053",
                   "afcons house, 16,shah industrial estate,veera desai road, azadnagar,andheri (west), mumbai,maharashtra 400053",
                   "sarjapur marthahalliouter ring road (orr)devarabisanahalli, bellandur post,bangalore",
                   "punj lloyd house,17-18, nehru place,new delhi, delhi 110019",
                   "'mihir', h. No.8-2-350/5/a/24/1b,rd number 2,panchavati colony,hyderabad, telangana 500034",
                   "enkay towers,2nd floor, block a,jwala mill rd, phase v,sector 19, gurugram,haryana 122016",
                   "82-83, vaikunth,2nd floor, Nehru place,new Delhi, Delhi 110019",
                   "7th floor,naman centre,plot no c-31, g block,bandra kurla complex,bandra (east), mumbai,maharashtra 400051",
                   "ncc house,madhapur,hyderabad, telangana 500081",
                   "Paigah house156-159, sp roadsecunderabad 500003telangana, india.",
                   "3rd floor, raheja nest complex, irb road, mhada colony 20, andheri east, mhada colony 20, powai, mumbai, maharashtra 400072",
                   "Patel estate,near mtnl office, jogeshwari west, momin nagar, jogeshwari west, mumbai, maharashtra 400102pateleng.com"]


companies_phone_number=["Ph no: 0712 242 0644",
                        "092636 36560",
                        "",
                        "0124 474 1000",
                        "033 3248 8584",
                        "022 2575 1000",
                        "086520 77709",
                        "022 6719 1000",
                        "080 4349 0088",
                        "011 2646 6105",
                        "040 3093 1111",
                        "0124 482 8888",
                        "011 4932 1400",
                        "022 4202 8000",
                        "040 2326 8888",
                        "+91-40-27902663/4",
                        "022 6640 4220",
                        "022 2676 7500"]
print(len(companies_phone_number))


companies_logo=["https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLarsen_%2526_Toubro&psig=AOvVaw3AvKO09xJKAZF-Z7cJVjwh&ust=1588168773847000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi7tO-ji-kCFQAAAAAdAAAAABAD",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/677px-Tata_logo.svg.png          ",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJaypee_Group&psig=AOvVaw3XyRKlV6y4mRLAPKbePcLQ&ust=1588169265251000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjrt9qli-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.lancogroup.com%2FDownloads.aspx&psig=AOvVaw3iopiA1ncTTv4TdE4LGjrG&ust=1588169173574000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKC-w62li-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReliance_Infrastructure&psig=AOvVaw0GXMqf3pjRFMsJqM9GD1Ge&ust=1588169331112000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjnhfmli-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AHindustan_Construction_Company_logo.svg&psig=AOvVaw2eJHotv3gT8FfutZ1yy6XT&ust=1588169370606000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDPlYymi-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.glassdoor.co.in%2FBenefits%2FGammon-India-Limited-India-Benefits-EI_IE369925.0%2C20_IL.21%2C26_IN115.htm&psig=AOvVaw23zWccAJlP5l_vMgV-2xAX&ust=1588169405258000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCh0Jumi-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nrgedge.net%2Fcompany%2Fafcons-infrastructure-ltd-india&psig=AOvVaw0xqIX56P1GmXrpyBTyey4z&ust=1588169432136000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjzuqimi-kCFQAAAAAdAAAAABAJ",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSobha_Ltd.&psig=AOvVaw3TGAudlNoxU2cTz1P8WdoH&ust=1588170062145000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMis9NWoi-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpunj-lloyd-limited&psig=AOvVaw2xsn94R5cQlocxvjw9a2vK&ust=1588170136041000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDgjvmoi-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FHyderabad%2FIvrcl-Ltd-Vijay-Nagar-Colony%2F040PXX40-XX40-000690369932-L5L6_BZDET&psig=AOvVaw1LDCJgTSt7hfa4tJJ-SBAo&ust=1588169515894000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCcutCmi-kCFQAAAAAdAAAAABAa",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsoma-enterprise-ltd.&psig=AOvVaw21socE-PyIVujhdDYU0LDu&ust=1588169570533000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjGueqmi-kCFQAAAAAdAAAAABANv",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fsimplixinfra%2F&psig=AOvVaw2y7DWHclI_qJnv0hi67Ohp&ust=1588169613535000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi4mf-mi-kCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.glassdoor.co.in%2FPhotos%2FNCC-Limited-Office-Photos-E519688.htm&psig=AOvVaw2lNJ96apGqgbqlFfrKfFvt&ust=1588169650869000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjO5pCni-kCFQAAAAAdAAAAABAM",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business-standard.com%2Farticle%2Fpti-stories%2Fgvk-loss-widens-to-rs-159-cr-in-q2-119111401524_1.html&psig=AOvVaw2TBzAxYrTYT5vchEGDZk8J&ust=1588169689057000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDkiaOni-kCFQAAAAAdAAAAABAM",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.economictimes.com%2Fmarkets%2Fstocks%2Fnews%2Ftoll-suspension-not-a-long-term-worry-for-irb-infrastructure%2Farticleshow%2F55592481.cms&psig=AOvVaw0rX2pcgj5pcFhV0PCm74RC&ust=1588169724006000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjb5rOni-kCFQAAAAAdAAAAABAN",
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.patilgroup.co.in%2F&psig=AOvVaw2Lne3Zb0zn_jZojh9W96-p&ust=1588169805054000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKimuduni-kCFQAAAAAdAAAAABAD",
      "https://i.pinimg.com/originals/26/d6/dc/26d6dc8352e7f148898bb40e36518dba.png"]
    
print(len(companies_logo))


for x in range(0,len(companies_name)):
        company_data ={
            "company_name":companies_name[x],
            "company_discription":companies_description[x],
            "company_address":companies_address [x],
            "company_phone_number":companies_phone_number[x],
            "company_logo":companies_logo[x]
            }
    # print(company_data)
        collection.insert_one(company_data)
    

        
    #print(rec)
    
    

