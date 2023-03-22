import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { EventService } from 'src/app/Services/EventService/event.service';
import { UserService } from 'src/app/Services/UserService/User.service';

@Component({
  selector: 'app-SideNavbar',
  templateUrl: './SideNavbar.component.html',
  styleUrls: ['./SideNavbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  public currentWindowWidth: number = 11110;
  user:any;
  @Input() item:any;
  SettingsMenu:boolean = false
  AccountMenu:boolean = false
  constructor(private service: EventService,private userService:UserService,private router:Router,private authService:AuthService) { 
  
  }

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth
    
  }

  scrollUp(Smooth:boolean){
 
    if(Smooth == true){
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
    else{
      window.scroll({ 
        top: 0, 
        left: 0, 
      });

    }
   }
  
  

   Logout(){
     this.authService.Logout()
     window.location.reload();
   }

  NavigateToProfile(){
   
    this.router.navigate(['profile/'+ this.authService.userId()])
    this.scrollUp(false)

  }

  SettingsMenufunc(){
    
    if(this.SettingsMenu){
      this.SettingsMenu = false
    }
    else{this.SettingsMenu = true}
  }
  AccountMenufunc(){
    
    if(this.AccountMenu){
      this.AccountMenu = false
    }
    else{this.AccountMenu = true}
  }






  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }


}
