import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {
  
  count:number=1;

  constructor() { }

  ngOnInit() {
  }


  onMyClick(){   

      if(this.count==1){
        console.log("Event Occur...");
        this.count++;
      }


  }

}
