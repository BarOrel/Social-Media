import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "src/app/Models/Post";
import { AuthService } from "src/app/Services/Auth/Auth.service";
import { EventService } from "src/app/Services/EventService/event.service";
import { PostService } from "src/app/Services/PostService/Post.service";
import { UserService } from "src/app/Services/UserService/User.service";


@Component({
  selector: 'app-AddPost',
  templateUrl: './AddPost.component.html',
  styleUrls: ['./AddPost.component.css']
})
export class AddPostComponent implements OnInit {
  clickeventsub: Subscription;
  item:any;
  ShowImg:any
  ContentText:any;
  ImageText:any;
  constructor(private service: EventService,private userService:UserService,private postService:PostService,private authService:AuthService) {
    this.clickeventsub = this.service.getEventUser().subscribe(() => {
      this.LoadUser()
    });
   }

  ngOnInit() {
   this.LoadUser()
   
  }

  LoadUser(){
    this.userService.GetUser().subscribe((data:any)=>{
      console.log(data)
      this.item = data
    })
   }

  AddPost(){
    let post = new Post()
    post.Content = this.ContentText
    post.ImgUrl = this.ImageText
    post.UserId = this.authService.userId();

    this.postService.AddPost(post).subscribe((data)=>{
      console.log(data)
      
    })
  }

}
