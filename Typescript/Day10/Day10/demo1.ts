
export class Myclass{

    public fname:string;  //Property
    private lname:string;
    protected id:number;

   

      constructor(f:string,l:string,id:number){
          this.fname=f;
          this.lname=l;
          this.id=id;
      }

     


      display(){
      //  let a;
        console.log(`
            First Name :: ${this.fname}
            Last name  :: ${this.lname}
            ID         :: ${this.id}
        `)
      }


}


//let obj=new Myclass(); // tsc => Compiler 
// let obj=new Myclass("Sumit","Raokhande",9); // paramaterizsed constructor
// obj.display();

export function add(a:number,b:number):number{

  return (a+b);
}

export const pi=3.14;

