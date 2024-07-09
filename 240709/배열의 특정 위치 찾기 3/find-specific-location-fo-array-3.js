const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum=0

for(let i=0; i < input.length; i++){
    if(input[i] === 0) break;
    sum +=(input[i])
}
console.log(sum)