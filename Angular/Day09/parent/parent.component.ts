import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Data Send From Parent.....';

  jsonObj={
    fname:'Sumit',
    lname:'Raokhande',
    id:9
    
  }

  strDataReceived:string='';

  constructor() { }

  ngOnInit() {
  }

}
