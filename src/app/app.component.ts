import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from './Services/EventService/event.service';
import { UserService } from './Services/UserService/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SocialMedia_Client';

  public currentWindowWidth: number = 0;
  user:any;
 clickeventsub: Subscription;
  constructor(private userService:UserService,
    private service: EventService,
    @Inject(DOCUMENT) private documment:Document,
    private render:Renderer2
    ) {
      this.clickeventsub = this.service.getEventUser().subscribe(() => {
      this.LoadUser()
    });
    
    
  }
   ngOnInit() {
    this.LoadUser()
  }
  ScrollTop(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
 
  }
  
  onOutletLoaded(component:any) {
    component.someProperty = this.user;
} 


LoadUser(){
  this.userService.GetUser().subscribe((data:any)=>{
    console.log(data)
    this.user = data
  })
 }
}


export type Theme = 'light-theme'|'dark-theme';