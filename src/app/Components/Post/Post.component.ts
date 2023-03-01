import { Comment } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommentClass } from 'src/app/Models/Comment';
import { Like } from 'src/app/Models/Like';
import { PostService } from 'src/app/Services/PostService/Post.service';

@Component({
  selector: 'app-Post',
  templateUrl: './Post.component.html',
  styleUrls: ['./Post.component.css']
})
export class PostComponent implements OnInit {
  @Input() item:any;
  IsLiked:any
  index:number = 3
  
  constructor(private router:Router,private postService:PostService) { }

  ngOnInit() {
    this.IsLikedFunc(this.item.post.id);
  }
 scrollUp(){
  window.scroll({ 
    top: 0, 
    left: 0, 
  });
 }

 LoadPost(id:any){
  this.postService.GetPostById(id).subscribe((data)=>{
    this.item = data
    
  })
 }

 Like(id:any){
  this.postService.Like(id).subscribe((data)=>{
    this.IsLiked = data
    this.LoadPost(id);
    
  })
 }

 IsLikedFunc(id:number){
  this.postService.IsLike(id).subscribe((data)=>{
    console.log(data)
    this.IsLiked = data
  })
 }

 Comment(postId:any,content:string){
  let comment = new CommentClass()
  comment.Content = content;
  comment.PostId = postId;
  this.postService.Comment(comment).subscribe((data)=>{
    this.LoadPost(postId);
  })
    
 
 }

  NavigateToProfile(user:any){
    this.router.navigate(['profile/'+ user])
    this.scrollUp()
  }
  NavigateToPost(post:any){
    this.router.navigate(['post/'+ post])
    this.scrollUp()

  }
}
