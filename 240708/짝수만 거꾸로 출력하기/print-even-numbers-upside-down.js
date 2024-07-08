const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split("\n").map(Number);
let result=[]

for(const i of input){
    if(i % 2 === 0){
        result.push(i)
         
    }
   
}console.log(...result.reverse());