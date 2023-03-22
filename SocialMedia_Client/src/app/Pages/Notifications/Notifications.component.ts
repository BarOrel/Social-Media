import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/EventService/event.service';
import { NotificationsService } from 'src/app/Services/NotificationsService/Notifications.service';

@Component({
  selector: 'app-Notifications',
  templateUrl: './Notifications.component.html',
  styleUrls: ['./Notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  list:any
  IsLoaded:boolean = false
  constructor(private notificationService:NotificationsService,private router:Router,private eventService:EventService) { }

  ngOnInit() {
    this.notificationService.GetAll().subscribe((data)=>{
      console.log(data)
      this.list = data
      this.IsLoaded = true
      
      this.eventService.sendClickEventUser();
      
    })
  }

  scrollUp(){
    window.scroll({ 
      top: 0, 
      left: 0, 
    });
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
