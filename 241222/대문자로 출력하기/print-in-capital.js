const fs=require("fs");

let input = fs.readFileSync(0).toString().trim();

let str=""

for(let i of input){
    if(i >= "A" && i <= "z"){
        str += i
    }
   
} console.log(str.toUpperCase())