const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");
let index=0;

while(true){
    let n=Number(input[index]);
    index++;
    if(n < 25){
        console.log("Higher");
    }else if(n > 25){
        console.log("Lower")
    }
    if(n === 25){
        console.log("Good");
        break;
    }
}