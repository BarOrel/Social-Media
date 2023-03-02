import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute,private userServicd:UserService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = (params["id"]);
      this.userServicd.GetProfile(this.id).subscribe((data:any)=>{
        console.log(data)
        this.item = data
      })

      
   


    })
  }

}
