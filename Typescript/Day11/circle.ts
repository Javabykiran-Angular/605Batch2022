import {Shape} from './shape';

export class Circle extends Shape
{
    radius:number;
    area:number;

    constructor(r:number){
        super();
        this.radius=r;
        this.area=0;
    }


    Myarea(): void {
      this.area=3.14*this.radius*this.radius;
    }

    Display():void{
      console.log(`
          Radius is :: ${this.radius}
          Area      :: ${this.area}
      `)
    }


}