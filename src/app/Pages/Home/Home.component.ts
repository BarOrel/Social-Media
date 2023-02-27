import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/PostService/Post.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  list:any;
  constructor(private postService:PostService) { 
    postService.GetAll().subscribe((data:any)=>{
      this.list = data;
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
