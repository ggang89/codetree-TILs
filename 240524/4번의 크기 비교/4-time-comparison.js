const fs=require("fs");
let input=fs.readFileSync(0).toString().split("\n");
//input=['3','1 2 3 4'];
let newArr=input[1].split(" ");//[ '1', '2', '3', '4' ]
let a=Number(input[0]);
let b=Number(newArr[0]);
let c=Number(newArr[1]);
let d=Number(newArr[2]);
let e=Number(newArr[3]);
console.log(a>b? 1:0);
console.log(a>c?1:0);
console.log(a>d? 1:0);
console.log(a>e? 1:0);