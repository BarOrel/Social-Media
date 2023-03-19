import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Like } from 'src/app/Models/Like';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BaseUrl = 'https://localhost:7218/api/Post/'
  CommentBaseUrl = 'https://localhost:7218/api/Comment/'
  LikeBaseUrl = 'https://localhost:7218/api/Like/'

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

  DeletePost(id:any){
    return this.http.delete(this.BaseUrl + id);
  }
  
  Comment(comment:any){
    comment.UserId =  this.authSerivce.userId()
    return this.http.post(this.CommentBaseUrl ,comment);
  }

  DeleteComment(id:any){
    return this.http.delete(this.CommentBaseUrl + id);
  }

  Like(postid:any){
    let like = new Like
    like.PostId = postid
    like.UserId = this.authSerivce.userId()

    return this.http.post(this.LikeBaseUrl , like);
  }

  
  IsLike(id:any){
    let like = new Like()
    like.PostId = id
    like.UserId = this.authSerivce.userId()
    return this.http.post(this.LikeBaseUrl+"IsLiked" , like);
  }
}
