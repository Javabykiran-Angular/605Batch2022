import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

    strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque consectetur obcaecati, omnis pariatur sapiente ipsam nulla. Excepturi magni neque doloribus. Fuga excepturi cupiditate molestiae doloribus! Cumque iste nobis maiores.';

    num2:number=456.123789456;
    mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
