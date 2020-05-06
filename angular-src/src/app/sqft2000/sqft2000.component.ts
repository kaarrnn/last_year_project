import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-sqft2000',
  templateUrl: './sqft2000.component.html',
  styleUrls: ['./sqft2000.component.css']
})
export class Sqft2000Component implements OnInit {
  sqft2000plus : any
  name :any
  phone: any
  email:any
  p : number = 1;
  constructor(private auth : AuthService) { }

  ngOnInit(): void {

    this.auth.get2000plussqft().subscribe(data=>{
      console.log(data);
      this.sqft2000plus = data
    })
  }

  onSubmitPopUp(){
    console.log(123); 
  }
} 
