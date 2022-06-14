import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit() {

    this.service.getPost()
    .subscribe((response)=>{
      // console.log(response)

       this.posts=(<any>response); 

    })

  }

}
