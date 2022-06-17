import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-paramater',
  templateUrl: './query-paramater.component.html',
  styleUrls: ['./query-paramater.component.css']
})
export class QueryParamaterComponent implements OnInit {

  jsonObj={
    myid:0,
    myfname:'',
    mystatus:''
  };


  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromUrl();
  }

  GetDataFromUrl(){
    
      this.route.queryParamMap
      .subscribe((param)=>{

        this.jsonObj.myid=+param.get('id');
        this.jsonObj.myfname=param.get('fname');
        this.jsonObj.mystatus=param.get('status');

      })
  }

}
