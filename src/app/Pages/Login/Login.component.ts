import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/Models/DTO/LoginModel';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string = ''
  Password:string = ''
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }




  SignIn(){
    console.log(this.Username)
    console.log(this.Password)
    if(this.Username != '' && this.Password != ''){
      let loginModel = new LoginModel()
      loginModel.Username = this.Username
      loginModel.Password = this.Password
      this.authService.Login(loginModel);
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields Cannot Be Empty!'
      })
    }

  }
}
