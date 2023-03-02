import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit, Renderer2 } from '@angular/core';
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
  constructor(private userService:UserService,
    @Inject(DOCUMENT) private documment:Document,
    private render:Renderer2
    ) {
    
    
  }
   ngOnInit() {
    //  this.userService.GetUser().subscribe((data:any)=>{
    //   console.log(data)
    //   this.user = data
    // })
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
    console.log(this.currentWindowWidth)
  }
  
  onOutletLoaded(component:any) {
    component.someProperty = this.user;
} 
}


export type Theme = 'light-theme'|'dark-theme';