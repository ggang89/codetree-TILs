const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [str,targetStr] = input;
let a=targetStr.length//2
let result=""
for(let i=0; i<str.length;i++){
    if(str.slice(i,i+a)===targetStr){
       result =i
       break;
    }
}console.log(result)