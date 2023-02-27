import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-PostPage',
  templateUrl: './PostPage.component.html',
  styleUrls: ['./PostPage.component.css']
})
export class PostPageComponent implements OnInit {
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = Number(params["id"]);

      
        console.log(this.id)
   


    })
  }

}
