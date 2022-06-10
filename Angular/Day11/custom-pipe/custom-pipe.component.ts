import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  description:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque? Sed pariatur sit placeat rerum laudantium excepturi modi assumenda vitae praesentium est et reiciendis, quisquam nesciunt sunt dolores distinctio facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque? Sed pariatur sit placeat rerum laudantium excepturi modi assumenda vitae praesentium est et reiciendis, quisquam nesciunt sunt dolores distinctio facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque? Sed pariatur sit placeat rerum laudantium excepturi modi assumenda vitae praesentium est et reiciendis, quisquam nesciunt sunt dolores distinctio facere."
  constructor() { }

  ngOnInit() {
  }

}
