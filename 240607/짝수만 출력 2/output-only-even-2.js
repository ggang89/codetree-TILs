const fs=require("fs");

let input=fs.readFileSync(0).toString().split(" ");

let b=Number(input[0]);
let a=Number(input[1]);

let i=b;
let result="";

while(i>=a){
    result += i + " ";
    i -=2;
}
console.log(result);