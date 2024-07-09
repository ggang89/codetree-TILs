const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum=0
let cnt=0
let sum2=0

for(const i of input){
    if(i%2===0) sum += i;
    if(i%3===0){
        sum2 +=i;
        cnt++
    }
}
let avr=(sum2/cnt).toFixed(1)

console.log(sum,avr)