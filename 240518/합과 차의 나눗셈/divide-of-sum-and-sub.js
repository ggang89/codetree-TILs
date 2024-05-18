const fs=require("fs");

let input=fs.readFileSync(0).toString().split(" ");

let a=Number(input[0]);
let b=Number(input[1]);
let c=(a+b);
let d=(a-b);
console.log((c/d).toFixed(2));