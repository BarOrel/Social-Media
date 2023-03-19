import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/User.service';

@Component({
  selector: 'app-EditAccountPage',
  templateUrl: './EditAccountPage.component.html',
  styleUrls: ['./EditAccountPage.component.css']
})
export class EditAccountPageComponent implements OnInit {
  user:any;
  NameEdit:boolean = false;
  ImageEdit:boolean = false;
  constructor(private userService:UserService) { 
    this.LoadUser()

  }

  ngOnInit() {
  }

  NameEditFunc(){
    if(this.NameEdit == true) this.NameEdit = false
    else{ this.NameEdit = true}
  }
  ImageEditFunc(){
    if(this.ImageEdit == true) this.ImageEdit = false
    else{ this.ImageEdit = true}
  }

  LoadUser(){
    this.userService.GetUser().subscribe((data:any)=>{
      console.log(data)
      this.user = data
    })
   }
}
