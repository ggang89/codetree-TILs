const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

let min=input[0]
let max=input[0]

for(const i of input){
     if(i === 999 || i === -999) break;
    if(i < min) min = i
    if(i > max) max = i
   
}
console.log(max,min)