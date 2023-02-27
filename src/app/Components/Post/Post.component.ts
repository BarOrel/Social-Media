import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router,private postService:PostService) { }

  ngOnInit() {
    this.postService.IsLike(this.item.post.id).subscribe((data)=>{
      console.log(data)
    })
  }
 scrollUp(){
  window.scroll({ 
    top: 0, 
    left: 0, 
  });
 }

 Like(id:any){
  this.postService.Like(id).subscribe((data)=>{
    console.log(data)
    this.IsLiked = data
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
