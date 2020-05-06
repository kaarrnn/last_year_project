import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myImage:any
  constructor(private authService :AuthService) { }

  ngOnInit() {
  
    this.authService.getUser().subscribe(data=>{
      console.log('data',data);
    })
  }



    onSubmitPopUp(){
        console.log(123)
    }

    uploadProifle(){
      this.myImage = this.myImage
      console.log(this.myImage);
      console.log('hi upload');
      this.authService.uploadProfile(this.myImage).subscribe(data=>{
        console.log(data);
      })

    }
}
