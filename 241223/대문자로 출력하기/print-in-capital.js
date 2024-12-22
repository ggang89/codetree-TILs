const fs=require("fs");

let input = fs.readFileSync(0).toString().trim();

let str=""
let str2=""

for(let i of input){
    if(i >= "A" && i <= "z"){
       
str += i
       
        
    }
   
} 

for(let s of str){
   if(s.charCodeAt(0) <91 || s.charCodeAt(0)>93){
    str2 += s
   }}
   console.log(str2.toUpperCase())