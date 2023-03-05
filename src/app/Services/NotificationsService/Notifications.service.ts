import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  BaseUrl = 'https://localhost:7218/api/Notification/'
constructor(private http:HttpClient,private authSerivce:AuthService) { }

  
GetAll(){
  return this.http.get(this.BaseUrl+this.authSerivce.userId());
}


}
