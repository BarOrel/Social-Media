import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Like } from 'src/app/Models/Like';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BaseUrl = 'https://localhost:7218/api/Post/'

  constructor(private http:HttpClient,private authSerivce:AuthService) { }
  
  
  GetAll(){
    return this.http.get(this.BaseUrl);
  }
  GetAllFollowing(){
    return this.http.get(this.BaseUrl+'GetFollowingPosts/'+ this.authSerivce.userId());
  }
  GetPostById(id:any){
    return this.http.get(this.BaseUrl+'GetById/'+ id);
  }

  
  AddPost(post:any){
    return this.http.post(this.BaseUrl, post);
  }
  
  
  
  
  
  Comment(comment:any){
    comment.UserId =  this.authSerivce.userId()

    return this.http.post(this.BaseUrl+"Comment" ,comment);
  }

  
  
  
  
  
  Like(postid:any){
    let like = new Like
    like.PostId = postid
    like.UserId = this.authSerivce.userId()

    return this.http.post(this.BaseUrl+"Like" , like);
  }

  IsLike(id:any){
    let like = new Like()
    like.PostId = id
    like.UserId = this.authSerivce.userId()
    return this.http.post(this.BaseUrl+"Like/IsLiked" , like);
  }
}
