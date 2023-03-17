import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { EventService } from 'src/app/Services/EventService/event.service';
import { UserService } from 'src/app/Services/UserService/User.service';

@Component({
  selector: 'app-FriendsNavbar',
  templateUrl: './FriendsNavbar.component.html',
  styleUrls: ['./FriendsNavbar.component.css']
})
export class FriendsNavbarComponent implements OnInit {
  public currentWindowWidth: number = 0;
  IsLoggedIn:any
  FollowingList:any;
  clickeventsub: Subscription;
  @Input() item:any;
  constructor(private service: EventService,private authService:AuthService,private userService:UserService,private router:Router) {
    this.clickeventsub = this.service.getEventUser().subscribe(() => {
      this.IsLoggedIn = authService.isLoggedIn()
      this.LoadFollowing()
    });
   }

  ngOnInit() {
    this.LoadFollowing()
    this.currentWindowWidth = window.innerWidth
    this.IsLoggedIn = this.authService.isLoggedIn()
    
  }

  scrollUp(){
    window.scroll({ 
      top: 0, 
      left: 0, 
    });
   }

  LoadFollowing(){
    this.userService.GetFollowing().subscribe((data)=>{
      this.FollowingList = data
      console.log(data)
    })
  }

  NavigateToProfile(user:any){
    this.router.navigate(['profile/'+ user])
    this.scrollUp()
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }

}
