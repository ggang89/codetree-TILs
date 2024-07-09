const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum2=0
let cnt=0
let sum3=0

for(let i=0; i<input.length; i++){
     if((i+1) % 2 === 0) sum2 += input[i];
     if((i+1)% 3===0){
        sum3 +=input[i]
        cnt++;
     }
    
}
let avr=(sum3/cnt).toFixed(1)

console.log(sum2,avr)