import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentClass } from 'src/app/Models/Comment';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { PostService } from 'src/app/Services/PostService/Post.service';

@Component({
  selector: 'app-PostGrid',
  templateUrl: './PostGrid.component.html',
  styleUrls: ['./PostGrid.component.css']
})
export class PostGridComponent implements OnInit {
  @Input() item:any;
  userId:any;
  IsLiked:any
  index:number = 3
  
  constructor(private router:Router,private postService:PostService,private authService:AuthService) { }

  ngOnInit() {
    this.IsLikedFunc(this.item.post.id);
    this.userId = this.authService.userId()
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
  if(content != ''){
    let comment = new CommentClass()
    comment.Content = content;
    comment.PostId = postId;
    this.postService.Comment(comment).subscribe((data)=>{
      this.LoadPost(postId);



    })
  }
    
 
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
