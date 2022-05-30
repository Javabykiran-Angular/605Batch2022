import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

    name:string='Sumit Raokhande';
    imgUrl:string='../../assets/bg_img.jpg';

  constructor() { }

  ngOnInit() {
  }

}
