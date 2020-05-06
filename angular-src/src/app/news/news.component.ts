import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient , HttpHeaders} from  '@angular/common/http';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title:any
  discription:any
  title1:any
  discription1:any
  time:any
  writter:any

  constructor(private router : Router,
              private http : HttpClient,
              private auth : AuthService) { }

  ngOnInit() {
    console.log("ngoninit")
    this.auth.getNews().subscribe(data=>{
      console.log(data)
      const x  = JSON.parse(JSON.stringify(data))
      this.title = x.title;
      this.discription = x.discription;
      this.title1 = x.title1;
      this.discription1 = x.discription1;
      this.writter =x.writter;
      this.time = x.time;
   
    })
  }

}
