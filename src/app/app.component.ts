import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/UserService/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SocialMedia_Client';
  user:any;
  constructor(private userService:UserService) {
    
    
  }
   ngOnInit() {
    //  this.userService.GetUser().subscribe((data:any)=>{
    //   console.log(data)
    //   this.user = data
    // })
  }
  
  onOutletLoaded(component:any) {
    component.someProperty = this.user;
} 
}
