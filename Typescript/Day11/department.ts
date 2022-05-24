
export class Department{
    private role:string;

    constructor(r:string){
      this.role=r;
    }

    //getter method
    getRole():string{
      return this.role;
    }

    //Setter Method
    setRole(r:string):void{
      this.role=r;

    }

}