const fs=require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

if(n===1){
    console.log("John")
}else if(n===2){
    console.log("Tom")
}else if(n===3){
    console.log("Paul");
}