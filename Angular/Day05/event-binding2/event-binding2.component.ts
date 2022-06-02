import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onImageClick(){
    console.log('on Image click....')
  }

  onDollerEvent(myevent){
    console.log(myevent);
    console.log("Data is => "+myevent.target.value)
  }

  onTemplateRef(myname){
    console.log(myname)
    console.log("Data is => "+myname.value)
    myname.style.background='green';
  }

  onTemplateRef1(myvalue){

    console.log("--------------- "+myvalue);
    
  }

}
