const fs=require("fs");

let n=fs.readFileSync(0).toString().split(" ");

let a=Number(n[0]);
let b=Number(n[1]);

let result="";

for(i = a; i <= b; i+=2){
    result+=i+" ";
}
console.log(result);