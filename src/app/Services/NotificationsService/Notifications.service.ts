import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  BaseUrl = 'https://localhost:7218/api/User/'
constructor(private http:HttpClient,private authSerivce:AuthService) { }




}
