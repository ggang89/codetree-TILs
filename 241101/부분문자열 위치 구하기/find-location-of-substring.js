const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [str,targetStr] = input;
let a=targetStr.length//2
for(let i=0; i<str.length-1;i++){
    if(str.slice(i,i+a)===targetStr)console.log(i)
       
}