// add1();
// Function has 4 basic types
// 1 Function has no Parameter & no return type
// 2 Function has with Parameter & no return type
// 3 Function has no Parameter & with return type
// 4 Function has with Parameter & with return type

// 1 Function has no argument & no return type

  function kuchbhi(){
    console.log("U r in First type of Function");
  }

  // kuchbhi()

  // 2 Function has with Parameter & no return type

  function add2(a:number,b:number){
    console.log("Addition is "+(a+b))
  }

  // add2(4,5);

// 3 Function has no Parameter & with return type
  function add3():number{
    return (8+8);
  }

  var temp=add3();
  // console.log("Addition is "+temp);

  // 4 Function has with Parameter & with return type


  function add4(a:number,b:number):number{
      return (a+b);
  }

  console.log(`Addition is ${add4(5,6)}`);