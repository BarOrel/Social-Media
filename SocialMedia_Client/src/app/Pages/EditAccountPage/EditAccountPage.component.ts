import { Component, OnInit } from '@angular/core';
import { ChangeNameDTO } from 'src/app/Models/DTO/ChangeNameDTO';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { EventService } from 'src/app/Services/EventService/event.service';
import { UserService } from 'src/app/Services/UserService/User.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-EditAccountPage',
  templateUrl: './EditAccountPage.component.html',
  styleUrls: ['./EditAccountPage.component.css']
})
export class EditAccountPageComponent implements OnInit {

  user:any;
  FirstNameText:string = '';
  LastNameText:string = '';
  imageUrlText:string = '';

  NameEdit:boolean = false;
  ImageEdit:boolean = false;
  constructor(private userService:UserService,private authSerivce:AuthService,private eventService:EventService) { 
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

  ChangeNameFunc(){
    
    if (this.FirstNameText != '' && this.LastNameText != ''){
      let dto = new ChangeNameDTO();
      dto.FirstName = this.FirstNameText;
      dto.LastName = this.LastNameText;
      dto.UserId = this.authSerivce.userId();
  
      this.userService.ChangeName(dto).subscribe((data)=>{
        console.log(data)
        this.eventService.sendClickEventUser()
        this.LoadUser()

            Swal.fire(
              'Success!',
              'Your name has been change!',
              'success'
            )

      })

    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields Cannot Be Empty!'
        
      })}

  }

  LoadUser(){
    this.userService.GetUser().subscribe((data:any)=>{
      console.log(data)
      this.user = data
    })
   }
}
