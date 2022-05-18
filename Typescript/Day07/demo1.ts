//Basics Of array 
// Array is growable & shrinkable dynamically
//Hetrogenous array u can create 

let a:number[]=[4,5,6];
let a1:number[]=[];
let a2=[4,8,9,7];
let a3=[2.5,'Sumit',true,5];
let a4:any[]=[];

// for(let i=0;i<a2.length;i++){

//   console.log("Array value is "+a2[i])
// }

// console.log('Array is '+a2);
// console.log("Array is using Join method "+a2.join(' '));
// console.log("Array is using Join method "+a2.join(' # '));

//For Each loop

// a2.forEach((myvalue,index)=>{
//     console.log(`Value is ${myvalue} Index is ${index}`);
// })

// Rest parameter Function

function display(...item:number[]){
  item.forEach((myvalue)=>{
    console.log('Value is '+myvalue);
  })
}

// display(4,5);
// display(55,66,8,9,7,12,4);

//1 Push & Pop Method
//2 splice method
let b:number[]=[];
//1 Push & Pop Method
// It works on LIFO Principal 
// Last in First Out 
b.push(5);
console.log(b);
b.push(7,88,9);
console.log(b)
let res=b.pop();
console.log(b)
console.log("Poped Value is "+res)
b.pop();
console.log(b)




