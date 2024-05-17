const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");
let b=Number(input[1]).toFixed(2);
let c=Number(input[2]).toFixed(2);

console.log(input[0]);
console.log(b);
console.log(c);