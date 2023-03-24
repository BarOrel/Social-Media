import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeNameDTO } from 'src/app/Models/DTO/ChangeNameDTO';
import { FollowDTO } from 'src/app/Models/DTO/FollowDTO';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl = 'https://localhost:7218/api/User/'
  FollowBaseUrl = 'https://localhost:7218/api/Follow/'

  constructor(private http:HttpClient,private authSerivce:AuthService) { }
  
  
  GetUser(){
    return this.http.get(this.BaseUrl+"?UserId="+this.authSerivce.userId());
  }

  GetProfile(id:any){
    return this.http.get(this.BaseUrl+"GetProfile/"+ id);
  }

  GetFollowing(){
    return this.http.get(this.BaseUrl+"Following/"+ this.authSerivce.userId());
  }

  ChangeName(changeNameDTO:ChangeNameDTO){
    return this.http.post(this.BaseUrl+"ChangeName/",changeNameDTO);
  }

  IsFollowed(id:any){
    let dto = new FollowDTO();
    dto.Following = id;
    dto.UserId = this.authSerivce.userId()
    return this.http.post(this.FollowBaseUrl+"IsFollow/",dto);
  }

  Follow(id:any){
    let dto = new FollowDTO();
    dto.Following = id;
    dto.UserId = this.authSerivce.userId()
    return this.http.post(this.FollowBaseUrl+"Follow/", dto);
  }


}
