import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[]=[];
  myid:number;
  mytitle:string='';
  mybody:string='';
  isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit() {

    this.GetPost();    

  }

  GetPost(){
    this.service.getPost()
    .subscribe((response)=>{
      // console.log(response)

       this.posts=(<any>response); 

    })
  }

  onSend(mytitle,mybody){

    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
          console.log(response);
    })

  }


  onEdit(item){
    console.log(item);
    this.myid=item.id;
    this.mytitle=item.title;
    this.mybody=item.body;
    this.isHidden=false;

  }

  onUpdate(){

      let obj={
        id:this.myid,
        title:this.mytitle,
        body:this.mybody
      }


      this.service.UpdateData(obj)
      .subscribe((response)=>{
        console.log(response);
        this.isHidden=true;
      })
      


  }


}
