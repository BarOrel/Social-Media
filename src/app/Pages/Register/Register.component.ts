import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  index:number = 1;

  FirstnameText:string ='';
  LastnameText:string ='';
  ImageText:string ='';
  GenderSelect:string ='Select Gender';
  UsernameText:string ='';
  PasswordText:string ='';
  ConfirmPasswordText:string ='';
  constructor() { }

  ngOnInit() {
  }

  SignUp(){
    if(this.UsernameText != '' && this.PasswordText != '' && this.ConfirmPasswordText != ''){
     if(this.PasswordText == this.ConfirmPasswordText){
       

     }
     else{ 
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Passwords Does not match!'
    })}
    }
    else{
      console.log(this.PasswordText,this.ConfirmPasswordText)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields Cannot Be Empty!'
      })
    }
  }

  NextPageReg(){
    if(this.FirstnameText != ''&& this.LastnameText != '' && this.ImageText != '' && this.GenderSelect != 'Select Gender'){
      console.log("suc")
      this.index = 2
    }
  
  }
  SelectGender(string:any){
    console.log(string)

  }
 
}
