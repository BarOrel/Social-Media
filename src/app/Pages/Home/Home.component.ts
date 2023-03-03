import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/Services/EventService/event.service';
import { PostService } from 'src/app/Services/PostService/Post.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
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
