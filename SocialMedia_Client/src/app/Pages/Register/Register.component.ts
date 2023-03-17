import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/Models/DTO/RegisterModel';
import { Gender } from 'src/app/Models/Enums/Gender.enum';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
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
  EmailText:string ='';
  ImageText:string ='';
  GenderSelect:string ='Select Gender';
  UsernameText:string ='';
  PasswordText:string ='';
  ConfirmPasswordText:string ='';
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  SignUp(){
    if(this.UsernameText != '' && this.PasswordText != '' && this.ConfirmPasswordText != ''&& this.EmailText != ''){
     if(this.PasswordText == this.ConfirmPasswordText){
       let registerModel  = new RegisterModel()
       registerModel.Username = this.UsernameText
       registerModel.FirstName = this.FirstnameText
       registerModel.LastName = this.LastnameText
       registerModel.Email = this.EmailText
       registerModel.Password = this.PasswordText
       registerModel.ImageUrl = this.ImageText
       if(this.GenderSelect == 'Male'){ registerModel.Gender = Gender.Male}
       if(this.GenderSelect == 'Female'){ registerModel.Gender = Gender.Female}
       if(this.GenderSelect == 'Other'){ registerModel.Gender = Gender.Other}
      console.log(registerModel)
      //  registerModel.Email = 
      
       this.authService.Register(registerModel)

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
