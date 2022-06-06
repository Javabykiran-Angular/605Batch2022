import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {

  result:number=0;
  name:string='';

  add:number=0;

  constructor() { }

  ngOnInit() {
  }

  onAddition(num1,num2){

      let n1=+num1;
      let n2=+num2;
      // this.result=num1+num2;
      this.result=n1+n2;
  }

  onChange(myname){
    console.log('Change event Occur.....')
    myname.style.background='green';
    myname.style.color='white';
  }

  onkeyUp(){
    console.log("Key Up event Occur....")
  }

  onkeyDown(){
    console.log('Key Down event occur..')
  }

 

}
