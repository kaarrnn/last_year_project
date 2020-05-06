import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  
  validateRegister(user){
    if(user.username == undefined || user.email == undefined ||user.phone==undefined|| user.password == undefined || user.conformPassword){
      return false;
    }
    else{
      return true
    }
  }

  
  validateEmail(user){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(user.email);
  }
}
