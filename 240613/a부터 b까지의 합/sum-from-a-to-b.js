const fs=require("fs");

let input =fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let sum=a;

for(let i=a; i <=b; i++){
    sum +=i;
}
console.log(sum-a);