import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public arr =  [1,2,3,4,5,6];
  ReadyToMove : any;
  p:number=1;
  ReadyToMove_size:any;
  startIndex = 0 
  endIndex = 0
  constructor(private auth : AuthService) { }

  ngOnInit() {
      // this.auth.getReadyToMove().subscribe(data=>{
      //   //console.log(data);
      //   this.ReadyToMove = JSON.parse(JSON.stringify(data))
      //   this.ReadyToMove_size = this.ReadyToMove.length/10;
      //   console.log(Math.floor(this.ReadyToMove_size))
      //   this.ReadyToMove_size =Math.floor(this.ReadyToMove_size);
        // console.log(this.ReadyToMove[0].id);
        // console.log(this.ReadyToMove.length);
      // })      

      
  }

  // getArrayFromNumber(ReadyToMove_size){
  //     return new Array(ReadyToMove_size);   
  // }

 
}
