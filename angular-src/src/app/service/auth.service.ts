import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from  '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authtoken :any;
  user:any
  users:any
  
  constructor(private http : HttpClient,
              private router  : Router) { }

  registerUser(user){
    //let headers = new HttpHeaders();
    //headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/user/register',user);
  }

  authenticateUser(user){
    return this.http.post('http://localhost:3000/api/user/login',user);
  }  

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user))
    this.authtoken = token;
    this.user = user
  }

  loggedIn(){
    const x = localStorage.getItem('user')
    if(x){
      return true
    }
    else{
      return false
    }
  }


  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authtoken = token
  }

  logout(){
    this.authtoken = null
    this.user = null
    localStorage.clear();
    console.log('inside logout')
    this.router.navigate['/homepage'];
  }

  getUser(){
    console.log('Inside getUser')
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user:',user)

    const  userMail = user.email;
    console.log('USER MAIL:',userMail)
    
    
    return this.http.get('http://localhost:3000/api/user/getuser');
    
  }

  getReadyToMove(){
    console.log('get ready to move');
    return this.http.get('http://localhost:3000/data/getAvailability');
  }

  get2000plussqft(){
    console.log('get2000plussqft')
    return this.http.get('http://localhost:3000/data/get2000plussqft');
  }

  uploadProfile(myImage){
    return this.http.post('http://localhost:3000/api/user/upload',myImage);
    
  }

  getNews(){
    return this.http.get('http://localhost:3000/data/getNews');
  }

}

