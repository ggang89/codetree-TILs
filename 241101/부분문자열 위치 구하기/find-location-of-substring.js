const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [str,targetStr] = input;

for(let i=0; i<str.length-1;i++){
    if(str[i]+str[i+1]===targetStr) console.log(i)
       
}