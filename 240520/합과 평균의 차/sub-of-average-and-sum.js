const fs=require("fs");

let input=fs.readFileSync(0).toString().split(" ");
let a=Number(input[0]);
let b=Number(input[1]);
let c=Number(input[2]);
let sum=(a+b+c);
let average=(Math.floor((a+b+c)/3));
console.log(sum);
console.log(average);
console.log(sum-average);