import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideNavbar',
  templateUrl: './SideNavbar.component.html',
  styleUrls: ['./SideNavbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  SettingsMenu:boolean = false
  constructor() { }

  ngOnInit() {
  }


  SettingsMenufunc(){
    if(this.SettingsMenu){
      this.SettingsMenu = false
    }
    else{this.SettingsMenu = true}
  }
}
