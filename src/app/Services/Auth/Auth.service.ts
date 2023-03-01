import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/DTO/LoginModel';
import { RegisterModel } from 'src/app/Models/DTO/RegisterModel';

import Swal from 'sweetalert2';
import { EventService } from '../EventService/event.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseUrl:string = "https://localhost:7218/api/";

  IsLoggedIn: boolean = false;
  

  constructor(private http:HttpClient,
    private eventService:EventService
    ,private router:Router) {

     }


    Login(model:LoginModel){
      this.http.post(this.BaseUrl+'User/Login',model).subscribe((data:any)=>
        {
          console.log(data)
          localStorage.setItem('Authorization', data.token)
          localStorage.setItem('UserId', data.userid)
          localStorage.setItem('Username', data.username)
          this.eventService.sendClickEventUser();
          Swal.fire(
            '',
            'Logged in Successfully',
            'success'
          )
            this.IsLoggedIn = true;
            this.router.navigate([''])
            
          
        },(err) => 
        {   
          if(err.status == 400){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Username or Password is incorrect',
          
            })
          }
        });
    }
    
    Register(model:RegisterModel):any{
     
        this.http.post(this.BaseUrl + 'User/Register',model).subscribe((data)=>{
          var login = new LoginModel();
          login.Password = model.Password
          login.Username = model.Username
          this.Login(login)
          

          Swal.fire(
            '',
            'Account Created Succesfully',
            'success'
          )
        


        },(err) => 
        {   
          if(err.status == 400){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed To Created an Account',
          
            })
          }
        });

      
    }
    
    
    Logout(){
      localStorage.removeItem('Authorization')
      localStorage.removeItem('UserId')
      localStorage.removeItem('Username')
      this.IsLoggedIn = false;
      this.eventService.sendClickEventUser();
      this.router.navigate([''])
      
    }
    
    UserValidation(){
      if(localStorage.getItem('Authorization') != null){
        this.http.post(this.BaseUrl+'User/UserValidation',this.userId()).subscribe((data)=>{
          
        },(err) => 
        {   
          if(err.status == 400){
            
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Account Not Been Found',
          
            })
            this.Logout()
          }
        });

      }
    }


    isLoggedIn(){
       return localStorage.getItem('Authorization') != null;
    }
    userId(){
      return localStorage.getItem('UserId')!;
    }
    Username(){
      return localStorage.getItem('Username')!;
    }
    isAdmin(){
      return localStorage.getItem('IsAdmin')!;
    }

}
