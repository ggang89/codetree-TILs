const fs = require("fs");

let input =fs.readFileSync(0).toString().split(" ");

let a=Number(input[0])+8;//가로
let b=Number(input[1])*3;//세로
let c=a*b
console.log(a);
console.log(b);
console.log(c);