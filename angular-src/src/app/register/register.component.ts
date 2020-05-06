import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
//import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../service/validate.service';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	username : String;
	email:String;
	phone:String;
	password:String;
	conformPassword:String;
  constructor(private router: Router,
			private validateService : ValidateService,
		//	private flashMessage :FlashMessagesService,
			private authService :AuthService) { }

  ngOnInit() {

	
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })


    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
		

});
   
  }

  onRegisterSbumit(){
  console.log('submitted')
  const user = {
	username:this.username,
	email:this.email,
	phone:this.phone,
	password:this.password,
	conformPassword:this.conformPassword
  }

  if(!this.validateService.validateRegister){
	//this.flashMessage.show('please enter all fiedls',{cssClass:'alert-danger',timeout:3000})
	return false
  }

  if(this.validateService.validateEmail(user.email)){
	//this.flashMessage.show('please enter valid email',{cssClass:'alert-danger',timeout:3000});
	return false  
}


this.authService.registerUser(user).subscribe(data=>{
	if(data){ 
	 // this.flashMessage.show('You are now registered',{cssClass:'alert-success',timeout:3000})
	  this.router.navigate(['/login'])
	}
	else{
	//  this.flashMessage.show('you are not registered',{cssClass:'alert-danger',timeout:3000})
	  this.router.navigate(['/register'])
	}
  })
}
}
