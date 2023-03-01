import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/User.service';

@Component({
  selector: 'app-SideNavbar',
  templateUrl: './SideNavbar.component.html',
  styleUrls: ['./SideNavbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  user:any;
  @Input() item:any;
  SettingsMenu:boolean = false
  constructor(private userService:UserService,private router:Router) { 
   
  }

  ngOnInit() {
   
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
  
  NavigateToProfile(user:any){
    this.router.navigate(['profile/'+ user])
    this.scrollUp(false)

  }

  SettingsMenufunc(){
    if(this.SettingsMenu){
      this.SettingsMenu = false
    }
    else{this.SettingsMenu = true}
  }
}
