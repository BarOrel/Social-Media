import { Component, Input, OnInit } from '@angular/core';
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
  clickeventsub: Subscription;
  user:any;
  @Input() item:any;
  SettingsMenu:boolean = false
  AccountMenu:boolean = false
  constructor(private service: EventService,private userService:UserService,private router:Router,private authService:AuthService) { 
    this.clickeventsub = this.service.getEventUser().subscribe(() => {
      this.LoadUser()
    });
  }

  ngOnInit() {
   this.LoadUser()
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
  
   LoadUser(){
    this.userService.GetUser().subscribe((data:any)=>{
      console.log(data)
      this.item = data
    })
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
}
