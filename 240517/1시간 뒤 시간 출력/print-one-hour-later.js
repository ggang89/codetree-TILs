const fs=require("fs");

let input=fs.readFileSync(0).toString().split(":");

let hour=Number(input[0])+1;
let min=input[1];
console.log(hour+":"+min);