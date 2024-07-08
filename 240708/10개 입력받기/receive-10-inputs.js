const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum=0;
let cnt=0;

for(let i of input){
    if(i === 0) break;
    sum +=i;
    cnt++;
}
let avr=(sum/cnt).toFixed(1);
console.log(sum,avr)