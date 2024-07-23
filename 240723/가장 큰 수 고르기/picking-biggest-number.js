const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

let maxV=input[0];

for(let i = 0; i<input.length; i++){
   if(input[i] > maxV)maxV=input[i]
}console.log(maxV)