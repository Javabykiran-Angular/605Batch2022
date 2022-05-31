import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red';
  mycolor2:string="#0e71eb";
  rating:number=21;

  jsonObj={
    color:'red',
    fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    'font-size':'32px'
  }

  constructor() { }

  ngOnInit() {
  }

}
