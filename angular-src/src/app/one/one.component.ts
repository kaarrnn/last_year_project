import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../service/auth.service'
import { HttpClient , HttpHeaders} from  '@angular/common/http';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  myImage:any
  constructor(private authService:AuthService,
              private http : HttpClient) { }

@ViewChild('fileInput',{static:false}) fileInput:ElementRef;

  ngOnInit() {  
}


// onClick(){
//   console.log('Inside  onclick of profile form')

  
//   // this.myImage = this.myImage
//   // console.log(this.myImage)


//   // var r = new FileReader();

//   // console.log(r)

// //   r.onload = function(event) {
// //     //var contents = event.target.result;
// //     console.log("file loaded successfully");
// // };

// // r.onloadend = function(event) {
// //   //var contents = event.target.result;
// //   console.log("file loadend trial");
// // };

// r.readAsBinaryString(this.myImage);
// console.log(r)

//   this.authService.uploadProfile(this.myImage).subscribe(data=>{
//     console.log(data);
//   })
// }
onClick(){
  console.log("inside click");

  const imgBlob = this.fileInput.nativeElement.file;
  const file = new FormData();
  file.set('file',imgBlob);

  return this.http.post('http://localhost:3000/api/user/upload',file).subscribe(data=>{
    console.log(data);
  })
}


}
