import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { EventService } from 'src/app/Services/EventService/event.service';

@Component({
  selector: 'app-FriendsNavbar',
  templateUrl: './FriendsNavbar.component.html',
  styleUrls: ['./FriendsNavbar.component.css']
})
export class FriendsNavbarComponent implements OnInit {
  public currentWindowWidth: number = 0;
  IsLoggedIn:any
  clickeventsub: Subscription;
  @Input() item:any;
  constructor(private service: EventService,private authService:AuthService) {
    this.clickeventsub = this.service.getEventUser().subscribe(() => {
      this.IsLoggedIn = authService.isLoggedIn()
    });
   }

  ngOnInit() {
    this.IsLoggedIn = this.authService.isLoggedIn()
    
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
    console.log(this.currentWindowWidth)
  }

}
