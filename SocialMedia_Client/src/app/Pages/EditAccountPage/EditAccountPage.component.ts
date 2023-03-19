import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/User.service';

@Component({
  selector: 'app-EditAccountPage',
  templateUrl: './EditAccountPage.component.html',
  styleUrls: ['./EditAccountPage.component.css']
})
export class EditAccountPageComponent implements OnInit {
  user:any;
  constructor(private userService:UserService) { 
    this.LoadUser()

  }

  ngOnInit() {
  }


  LoadUser(){
    this.userService.GetUser().subscribe((data:any)=>{
      console.log(data)
      this.user = data
    })
   }
}
