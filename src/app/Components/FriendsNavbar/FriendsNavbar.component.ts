import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-FriendsNavbar',
  templateUrl: './FriendsNavbar.component.html',
  styleUrls: ['./FriendsNavbar.component.css']
})
export class FriendsNavbarComponent implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit() {
  }

}
