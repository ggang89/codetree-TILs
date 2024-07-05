const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum=0;
for(let i of input){
    sum += i;
}
console.log(sum/8)