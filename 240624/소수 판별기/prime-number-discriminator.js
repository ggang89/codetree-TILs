const fs=require("fs");

let n=Number(fs.readFileSync(0).toString());

let satisfied = true;

if(n % n ===0 && n % 1 ===0){
    satisfied = true;
    console.log("P")
}else{
    console.log("C")
}