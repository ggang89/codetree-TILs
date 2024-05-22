const fs =require("fs");

let n = Number(fs.readFileSync(0).toString());

if(n>=3000){
console.log("book")
}else if(3000>n>=1000){
    console.log("mask")
}else if(n<1000){
    console.log("no");
}