import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/Auth.service';
import { PostService } from 'src/app/Services/PostService/Post.service';

@Component({
  selector: 'app-PostPage',
  templateUrl: './PostPage.component.html',
  styleUrls: ['./PostPage.component.css']
})
export class PostPageComponent implements OnInit {
  id: number = 0;
  IsLoaded:boolean = false
  item:any;
  constructor(private route: ActivatedRoute,private router:Router,private postService:PostService,private authService:AuthService) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = Number(params["id"]);
      this.LoadPost(this.id);
      
        
   


    })
  }

  LoadPost(id:any){
    this.postService.GetPostById(id).subscribe((data)=>{
      this.item = data
      this.IsLoaded = true
    })
   }
  
  
}
