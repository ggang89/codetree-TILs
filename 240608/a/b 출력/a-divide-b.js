const fs=require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let c= a/b;
//console.log(c); 0.6

let result="";


for(i=1; i<=19; i++){
    result +="0";
    
}
console.log(c+result);