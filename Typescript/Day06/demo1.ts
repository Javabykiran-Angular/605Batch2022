// Anonymous Functions
// It does not have any name 

  var temp=function (){
    console.log("Anonymous Functions is called")
  }

  // temp();

  let temp1=function (a:number,b:number):number{
      return (a+b);
  }

      // let res=temp1(5,6);

    //  console.log(`Addition is ${res}`) 

    // fat Arrow function/Arrow function

      var temp2= ()=>{
          console.log("Fat arrow function is called")
        }

        // temp2();

      var temp3= (a:number,b:number):number=>{
          return (a+b)
        }

        // console.log(`Addition is using fat Arrow ${temp3(2,3)}`)

        //  optional Parameter Functions

          function add1(a:number,b?:number){

            console.log("Value of a is "+a) //2
            console.log("Value of b is "+b) //undefined
            console.log("Addition of a+b is "+(a+b)) // NAN=> Not a number

          }

          // add1(2);
          // add1(2,5);
          // add1(2);

          function add2(a?:number,b?:number){

            console.log("Value of a is "+a) //2
            console.log("Value of b is "+b) //undefined
            console.log("Addition of a+b is "+(a+b)) // NAN=> Not a number

          }

          // add2();

          // Default Parameter Functions

          function add3(a:number,b:number=8){
            console.log("Value of a is "+a) //2
            console.log("Value of b is "+b) //8
            console.log("Addition of a+b is "+(a+b)) // 10

          }

          // add3(2);
          add3(2,10);