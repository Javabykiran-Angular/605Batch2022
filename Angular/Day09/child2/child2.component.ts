import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  strdata:string='Data Send from child====>>>>';

     @Output() ChildStrEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSend(){

    this.ChildStrEvent.emit(this.strdata)
  }

}
