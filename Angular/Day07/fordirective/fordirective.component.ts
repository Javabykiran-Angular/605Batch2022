import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Vue js','Embber Js','JSP'];

  arrobj=[
    {
      name:'Motorolla',
      price:30000,
      quantity:1
    },
    {
      name:'OnePlus',
      price:45000,
      quantity:1
    },
    {
      name:'samsung',
      price:20000,
      quantity:2
    },
    {
      name:'RealMe',
      price:15000,
      quantity:3
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
