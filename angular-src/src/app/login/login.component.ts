import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email :String
password :string
  constructor(private authService : AuthService ,
              private router :Router) { }

//   ngOnInit() {

    
// (function ($) {
//   "use strict";


//   /*==================================================================
//   [ Focus input ]*/
//   $('.input100').each(function(){
//       $(this).on('blur', function(){
//           if($(this).val().trim() != "") {
//               $(this).addClass('has-val');
//           }
//           else {
//               $(this).removeClass('has-val');
//           }
//       })    
//   })


//   /*==================================================================
//   [ Validate ]*/
//   var input = $('.validate-input .input100');

//   $('.validate-form').on('submit',function(){
//       var check = true;

//       for(var i=0; i<input.length; i++) {
//           if(validate(input[i]) == false){
//               showValidate(input[i]);
//               check=false;
//           }
//       }

//       return check;
//   });


//   $('.validate-form .input100').each(function(){
//       $(this).focus(function(){
//          hideValidate(this);
//       });
//   });

//   function validate (input) {
//       if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//           if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//               return false;
//           }
//       }
//       else {
//           if($(input).val().trim() == ''){
//               return false;
//           }
//       }
//   }

//   function showValidate(input) {
//       var thisAlert = $(input).parent();

//       $(thisAlert).addClass('alert-validate');
//   }

//   function hideValidate(input) {
//       var thisAlert = $(input).parent();

//       $(thisAlert).removeClass('alert-validate');
//   }
  
//   /*==================================================================
//   [ Show pass ]*/
//   var showPass = 0;
//   $('.btn-show-pass').on('click', function(){
//       if(showPass == 0) {
//           $(this).next('input').attr('type','text');
//           $(this).addClass('active');
//           showPass = 1;
//       }
//       else {
//           $(this).next('input').attr('type','password');
//           $(this).removeClass('active');
//           showPass = 0;
//       }
      
//   });


// });
//   }

  ngOnInit(){



  }

  cambiar_login(){
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
    setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
    setTimeout(function(){    
    document.querySelector('.cont_form_sign_up').style.display = "none";
    },200);
  }


  cambiar_sign_up(){
    
    
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  

  setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);  
  
  }

  ocultar_login_sign_up(){
    document.querySelector('.cont_forms').className = "cont_forms";  
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
    document.querySelector('.cont_form_login').style.opacity = "0"; 
  
    setTimeout(function(){
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
    },500);  
  
    
  }
  onLoginSubumit(){
    const user = {
      email:this.email,
      password:this.password
    }

    console.log('user iss',user)

    this.authService.authenticateUser(user).subscribe(data=>{
        console.log(data)
        const x  = JSON.parse(JSON.stringify(data))
        if(x.success){ 
          this.authService.storeUserData(x.token,x);
            this.router.navigate(['/homepage']);
        }
        else{
          this.router.navigate(['/login'])
        }
    })
  }

}
