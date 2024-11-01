const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [str,targetStr] = input;
let a=targetStr.length//2
let result=-1
for(let i=0; i<str.length;i++){
    if(a <=1){
        if(str[i]===targetStr) result=i
    }
  else if(a>1){
    if(str.slice(i,i+a)===targetStr){
       result =i
       break;
    }else{
        break
    }}
}console.log(result)