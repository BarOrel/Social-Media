import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl = 'https://localhost:7218/api/User/'

  constructor(private http:HttpClient) { }
  
  
  GetUser(){
    return this.http.get(this.BaseUrl+"?UserId="+"23d3671f-62fb-4812-a42d-90b87f92bcaf");
  }
}
