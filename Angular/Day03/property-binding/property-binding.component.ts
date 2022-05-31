import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string="Sumit";
  imgUrl:string='../../assets/bg_img.jpg';

  ishidden:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
