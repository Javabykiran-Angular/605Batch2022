//2 Splice

// let a:number[]=[4,5,6];
// console.log(a)
// a.splice(1,0,77);
// console.log(a)
// a.splice(2,0,45,89,90);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(3,2);
// console.log(a);
// a.splice(2,1,100);
// console.log(a);
// a.splice(1,1,75,10,20);
// console.log(a);

// slice method
// slice is used to copy a section(particular memory location/indexing data) of array data
let a:number[]=[77,88,9,14,20,24,100,36,89,90,55,18];
let temp=a.slice(1,8)
console.log("Original array  => "+a);
console.log("Copied Array is => "+temp);
let temp1=a.slice(1);
console.log("Copied Array is => "+temp1);

let temp2=a.slice();
console.log("Copied Array is => "+temp2);
