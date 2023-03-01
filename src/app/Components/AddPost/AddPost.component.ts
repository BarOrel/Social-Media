import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/Models/Post";
import { PostService } from "src/app/Services/PostService/Post.service";
import { UserService } from "src/app/Services/UserService/User.service";


@Component({
  selector: 'app-AddPost',
  templateUrl: './AddPost.component.html',
  styleUrls: ['./AddPost.component.css']
})
export class AddPostComponent implements OnInit {
  item:any;
  ShowImg:any
  ContentText:any;
  ImageText:any;
  constructor(private userService:UserService,private postService:PostService) { }

  ngOnInit() {
    this.userService.GetUser().subscribe((data:any)=>{
      console.log(data)
      this.item = data
    })
  }

  AddPost(){
    let post = new Post()
    post.Content = this.ContentText
    post.ImgUrl = this.ImageText
    post.UserId = '23d3671f-62fb-4812-a42d-90b87f92bcaf'

    this.postService.AddPost(post).subscribe((data)=>{
      console.log(data)
      
    })
  }

}
