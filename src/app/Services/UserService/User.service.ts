import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl = 'https://localhost:7218/api/User/'

  constructor(private http:HttpClient,private authSerivce:AuthService) { }
  
  
  GetUser(){
    return this.http.get(this.BaseUrl+"?UserId="+this.authSerivce.userId());
  }

  GetProfile(id:any){
    return this.http.get(this.BaseUrl+"GetProfile/"+ id);
  }
}
