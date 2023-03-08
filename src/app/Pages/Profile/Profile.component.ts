import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { EventService } from 'src/app/Services/EventService/event.service';
import { PostService } from 'src/app/Services/PostService/Post.service';
import { UserService } from 'src/app/Services/UserService/User.service';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any ;
  item:any;
  IsLoaded:boolean = false;
  UserId:any;
  isFollowed:any;
  clickeventsub: Subscription;
  constructor(private route: ActivatedRoute,private service: EventService,private userServicd:UserService,private authService:AuthService) {
    this.clickeventsub = this.service.getEvent().subscribe(() => {
      this.LoadProfile()
    });
   }

  ngOnInit() {
    this.UserId = this.authService.userId();
    this.route.params.subscribe((params) => {
      this.id = (params["id"]);
      this.LoadProfile()

    })
  }

  Follow(Following:any){
      this.userServicd.Follow(Following).subscribe((data)=>{
      this.LoadProfile()
  })
  }


  LoadProfile(){
    this.userServicd.GetProfile(this.id).subscribe((data:any)=>{
      this.IsFollowed()
      console.log(data)
      this.item = data
      this.IsLoaded = true
    })

  }

  IsFollowed(){
    this.userServicd.IsFollowed(this.id).subscribe((data:any)=>{
      this.isFollowed = data
      console.log(this.isFollowed)
    })
  }
}
