const fs =require("fs");

let input= fs.readFileSync(0).toString().trim().split(" ");
//console.log(input);

let [a,b]=input;

let a2=a.slice(0,2);
let b2=b.slice(2)
console.log(a2+b2)