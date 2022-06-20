import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {


  
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
