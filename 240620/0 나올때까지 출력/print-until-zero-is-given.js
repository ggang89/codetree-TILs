const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");
let index=0;
let result="";
while(true){
    let n=Number(input[index]);
    index++;
    if(n===0){
        
        break;
    }
    console.log(n);
}