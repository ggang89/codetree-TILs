const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split("\n");
let result1=input[0].length;
let result2=input[1].length;

console.log(result1+result2)