import { Comment } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommentClass } from 'src/app/Models/Comment';
import { Like } from 'src/app/Models/Like';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { EventService } from 'src/app/Services/EventService/event.service';
import { PostService } from 'src/app/Services/PostService/Post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Post',
  templateUrl: './Post.component.html',
  styleUrls: ['./Post.component.css']
})
export class PostComponent implements OnInit {
  @Input() item:any;
  Menu:boolean = false;
  userId:any;
  IsLiked:any
  index:number = 3
  
  constructor(private router:Router,private postService:PostService,private authService:AuthService,private eventService:EventService) { }

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

 DeletePost(id:any){
  Swal.fire({
    title: 'Do you want to delete the post?',
    icon : 'question',
    showDenyButton: true,
    
    confirmButtonText: 'Cancel',
    denyButtonText: `Delete`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Changes are not saved', '', 'info')
    } else if (result.isDenied) {
      Swal.fire('Deleted!', '', 'success')
      this.postService.DeletePost(id).subscribe((data)=>{
        console.log(data)
        this.eventService.sendClickEvent();
      })
      
    }
  })
 }

 OpenMenu(){
    if(this.Menu)
     {this.Menu = false}
    else{ this.Menu = true} 
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
