const fs=require("fs");

let input=fs.readFileSync(0).toString().trim().split(" ");

let result="";

for(let i of input){
    result += String.fromCharCode(i)+" "
}

console.log(result)

