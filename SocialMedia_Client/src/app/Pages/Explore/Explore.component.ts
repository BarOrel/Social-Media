import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/Services/EventService/event.service';
import { PostService } from 'src/app/Services/PostService/Post.service';

@Component({
  selector: 'app-Explore',
  templateUrl: './Explore.component.html',
  styleUrls: ['./Explore.component.css']
})
export class ExploreComponent implements OnInit {
  list:any;
  IsLoaded:boolean = false
  clickeventsub: Subscription;
  constructor(private postService:PostService,private service: EventService) { 
    this.clickeventsub = this.service.getEvent().subscribe(() => {
      this.LoadPage()
    });
  }
  
  ngOnInit() {
    this.LoadPage()
  }

  LoadPage(){
    this.postService.GetAll().subscribe((data:any)=>{
      this.list = data;
      console.log(this.list)
      this.IsLoaded = true

    })
  }
}
